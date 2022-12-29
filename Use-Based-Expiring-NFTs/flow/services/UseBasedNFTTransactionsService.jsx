import * as fcl from "@onflow/fcl";
import "../flow/config.js";

import serverAuthorization from "../util/Authorization";

class UseBasedNFTTransactionsService {
  async MintUseBased(id, name, description, thumbnail, expired) {
    try {
      const txId = await fcl.mutate({
        cadence: `
                import UseBased from 0xae95963d3be2cd41
                import NonFungibleToken from 0x631e88ae7f1d7c20
                import MetadataViews from 0x631e88ae7f1d7c20
                
                transaction(id: UInt64, name: String, description: String, thumbnail: String, expired: Bool) {
                  let recipientCollection: &UseBased.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}
                  let admin: &UseBased.Admin
                  prepare(signer: AuthAccount, admin: AuthAccount) {
                    self.admin = admin.borrow<&UseBased.Admin>(from: UseBased.AdminStoragePath)!
                    let paymentReceiverAcct = getAccount(admin.address)
                
                    //SETUP EXAMPLE NFT COLLECTION
                    if signer.borrow<&UseBased.Collection>(from: UseBased.CollectionStoragePath) == nil {
                      signer.save(<- UseBased.createEmptyCollection(), to: UseBased.CollectionStoragePath)
                      signer.link<&UseBased.Collection{NonFungibleToken.Provider ,NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection}>(UseBased.CollectionPublicPath, target: UseBased.CollectionStoragePath)
                    }
                
                    // even if it has meta it can only select publi
                    self.recipientCollection = signer.getCapability(UseBased.CollectionPublicPath)
                                                .borrow<&UseBased.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>()!
                  }
                    
                  execute {
                    self.admin.mintNFT(recipient: self.recipientCollection,id: id, name: name, description: description, thumbnail: thumbnail, expired: expired)
                    log("minted")
                  }
                }
                `,
        args: (arg, t) => [
          arg(id, t.UInt64),
          arg(name, t.String),
          arg(description, t.String),
          arg(thumbnail, t.String),
          arg(expired, t.Bool),
        ],
        authorizations: [fcl.currentUser, serverAuthorization],
        limit: 9999,
      });

      fcl.tx(txId).subscribe((txStatus) => {
        console.log("Transaction Status: ", txStatus);
      });
    } catch (error) {
      console.log(error);
    }
  }

  async UpdateUseBased(id) {
    try {
      const txId = await fcl.mutate({
        cadence: `
            import UseBased from 0xae95963d3be2cd41
            import NonFungibleToken from 0x631e88ae7f1d7c20
            import MetadataViews from 0x631e88ae7f1d7c20

            transaction(id: UInt64) {
                let ownerCollection: &UseBased.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}
                let adminRef: &UseBased.Admin
                prepare(signer: AuthAccount, admin: AuthAccount) {
                    
                    self.adminRef = admin.borrow<&UseBased.Admin>(from: UseBased.AdminStoragePath)!
                    let adminAccount = getAccount(admin.address)

                    self.ownerCollection = signer.getCapability(UseBased.CollectionPublicPath)
                                                .borrow<&UseBased.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>()!
                }
                
                execute {
                    self.adminRef.expireNFT(owner: self.ownerCollection, id: id)
                    log("expired")
                }
            }
            `,
        args: (arg, t) => [arg(id, t.UInt64)],
        authorizations: [fcl.currentUser, serverAuthorization],
        limit: 9999,
      });

      fcl.tx(txId).subscribe((txStatus) => {
        console.log("Transaction Status: ", txStatus);
      });
    } catch (error) {
      console.log(error);
    }
  }
}
