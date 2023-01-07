export const GET_USED_BASED_NFTS = `
import UseBasedNFT from 0xae95963d3be2cd41
import MetadataViews from 0x631e88ae7f1d7c20

pub fun main(address: Address): [UseBasedNFT.NFTMetaData] {
    let collection = getAccount(address).getCapability(UseBasedNFT.CollectionPublicPath)
                    .borrow<&{MetadataViews.ResolverCollection}>()
                    ?? panic("Could not borrow a reference to the nft collection")
    let ids = collection.getIDs()
    let answer: [UseBasedNFT.NFTMetaData] = []
    for id in ids {    
    let nft = collection.borrowViewResolver(id: id)
    let view = nft.resolveView(Type<UseBasedNFT.NFTMetaData>())!
    let display = view as! UseBasedNFT.NFTMetaData
    answer.append(display)
    }
    
    return answer
}
`;
