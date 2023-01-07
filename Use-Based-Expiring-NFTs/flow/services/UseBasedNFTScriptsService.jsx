import { GET_USED_BASED_NFTS } from "../cadence/scripts/getUseBasedNfts";
import * as fcl from "@onflow/fcl";

class UseBasedNFTScriptsService {
  async GetNFTs(address) {
    try {
      const result = await fcl.query({
        cadence: GET_USED_BASED_NFTS,
        args: (arg, t) => [arg(address, t.Address)],
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

export const useBasedNFTScriptsService = new UseBasedNFTScriptsService();