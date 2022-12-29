export const GET_NOT_EXPIRED_NFTS = `
import TimeBasedExpirationNft  from 0xDeployer
 
 pub fun main (): {UInt64: UFix64} {
        return TimeBasedExpirationNft.notExpiredNFTs
 }
 `