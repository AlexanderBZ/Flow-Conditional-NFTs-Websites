export const UPDATE_USED_BASED_NFT = `
import UseBasedNFT from 0xae95963d3be2cd41
import NonFungibleToken from 0x631e88ae7f1d7c20
import MetadataViews from 0x631e88ae7f1d7c20

transaction(id: UInt64) {
    let ownerCollection: &UseBasedNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.Receiver}
    let adminRef: &UseBasedNFT.Admin
    prepare(signer: AuthAccount, admin: AuthAccount) {
        
        self.adminRef = admin.borrow<&UseBasedNFT.Admin>(from: UseBasedNFT.AdminStoragePath)!
        let adminAccount = getAccount(admin.address)

        self.ownerCollection = signer.borrow<&UseBasedNFT.Collection>(from: UseBasedNFT.CollectionStoragePath) ??
            panic("Could not borrow owner collection")
    }
    
    execute {
        self.adminRef.expireNFT(owner: self.ownerCollection, id: id)
    }
}
`