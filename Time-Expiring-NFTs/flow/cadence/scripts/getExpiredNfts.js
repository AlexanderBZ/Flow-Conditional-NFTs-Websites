export const GET_EXPIRED_NFTS = `
import TimeBasedExpirationNft  from 0xDeployer
 
 pub fun main (): [UInt64] {
        return TimeBasedExpirationNft.expiredNFTs
 }
 `