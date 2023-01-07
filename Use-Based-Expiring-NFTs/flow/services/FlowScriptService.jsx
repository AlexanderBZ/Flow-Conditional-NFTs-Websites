import * as fcl from "@onflow/fcl";

class FlowScriptService{
    async GetBalance(address) {
        try {
          const result = await fcl.query({
            cadence: `
            import FlowToken from 0x7e60df042a9c0868
            import FungibleToken from 0x9a0766d93b6608b7

            pub fun main(address: Address): UFix64{
              let balanceVault =  getAccount(address).getCapability(/public/flowTokenBalance).borrow<&FlowToken.Vault{FungibleToken.Balance}>()!
              return balanceVault.balance
            }`,
            args: (arg, t) => [arg(address, t.Address)],
          });
          console.log(result);
          return result;
        } catch (error) {
          console.log(error);
        }
      }
}

export const flowScriptService = new FlowScriptService();