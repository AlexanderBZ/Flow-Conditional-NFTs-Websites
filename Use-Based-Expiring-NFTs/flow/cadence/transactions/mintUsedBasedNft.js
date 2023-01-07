export const MINT_USED_BASED_NFT = `
import UseBasedNFT from 0xae95963d3be2cd41
import NonFungibleToken from 0x631e88ae7f1d7c20
import MetadataViews from 0x631e88ae7f1d7c20
import FlowToken from 0x7e60df042a9c0868
import FungibleToken from 0x9a0766d93b6608b7

transaction(id: UInt64, name: String, description: String, thumbnail: String, price: UFix64) {
    let recipientCollection: &UseBasedNFT.Collection{NonFungibleToken.CollectionPublic}
    let admin: &UseBasedNFT.Admin

    prepare(signer: AuthAccount, admin: AuthAccount) {
        self.admin = admin.borrow<&UseBasedNFT.Admin>(from: UseBasedNFT.AdminStoragePath)!
        let paymentReceiverAcct = getAccount(admin.address)

        //SETUP EXAMPLE NFT COLLECTION
        if signer.borrow<&UseBasedNFT.Collection>(from: UseBasedNFT.CollectionStoragePath) == nil {
            signer.save(<- UseBasedNFT.createEmptyCollection(), to: UseBasedNFT.CollectionStoragePath)
            signer.link<&UseBasedNFT.Collection{NonFungibleToken.CollectionPublic, MetadataViews.ResolverCollection}>(UseBasedNFT.CollectionPublicPath, target: UseBasedNFT.CollectionStoragePath)
        }

        self.recipientCollection = signer.getCapability(UseBasedNFT.CollectionPublicPath).borrow<&UseBasedNFT.Collection{NonFungibleToken.CollectionPublic}>() ??
            panic("Could not borrow recipient collection")

        //GET PAYMENT 
        let paymentReceiverVault = paymentReceiverAcct.getCapability<&{FungibleToken.Receiver}>(/public/flowTokenReceiver).borrow()
        ?? panic("Could not borrow payment receiver reference")

        let payerVault = signer.borrow<&FlowToken.Vault>(from: /storage/flowTokenVault)!
        
        let payment <- payerVault.withdraw(amount: price)
        paymentReceiverVault.deposit(from: <-payment)

    }
    
    execute {
        self.admin.mintNFT(recipient: self.recipientCollection,id: id, name: name, description: description, thumbnail: thumbnail, expired: false)
    }
}
`