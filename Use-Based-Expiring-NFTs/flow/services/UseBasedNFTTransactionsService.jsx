import * as fcl from "@onflow/fcl";
import { MINT_USED_BASED_NFT } from "../cadence/transactions/mintUsedBasedNft.js";
import { UPDATE_USED_BASED_NFT } from "../cadence/transactions/updateUsedBasedNft.js";

import serverAuthorization from "../../util/Authorization";

class UseBasedNFTTransactionsService {
  async MintUseBased(id, name, description, thumbnail, price) {
    try {
      const txId = await fcl.mutate({
        cadence: MINT_USED_BASED_NFT,
        args: (arg, t) => [
          arg(id, t.UInt64),
          arg(name, t.String),
          arg(description, t.String),
          arg(thumbnail, t.String),
          arg(price, t.UFix64),
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
        cadence: UPDATE_USED_BASED_NFT,
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

export const useBasedNFTTransactionsService = new UseBasedNFTTransactionsService();