export const GET_TIMES_NFTS_INSIDE_COLLECTION = `
import TimeBasedExpirationNft  from 0xDeployer
import MetadataViews from 0xDeployer

pub fun main(address: Address): [TimeBasedExpirationNft.NFTMetaData] {
  let collection = getAccount(address).getCapability(TimeBasedExpirationNft.CollectionPublicPath)
                    .borrow<&{MetadataViews.ResolverCollection}>()
                    ?? panic("Could not borrow a reference to the nft collection")
  let ids = collection.getIDs()
  let answer: [TimeBasedExpirationNft.NFTMetaData] = []
  
  for id in ids {
    let nft = collection.borrowViewResolver(id: id)
    let view = nft.resolveView(Type<TimeBasedExpirationNft.NFTMetaData>())!
    let display = view as! TimeBasedExpirationNft.NFTMetaData
    answer.append(display)
  }
    
  return answer
}
`