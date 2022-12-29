import * as fcl from "@onflow/fcl";
import "../../flow/config.js";

class RentNFTScriptsService {
  //FINISH SCROW
  async GetListedNFTData(listId) {
    try {
      const result = await fcl.query({
        cadence: `
                    import RentNFTV4 from 0xae95963d3be2cd41

                    pub fun main(listId: UInt64): RentNFTV4.NftListedData{
                        return RentNFTV4.getListedNftData(id: listId)
                    }
                `,
        args: (arg, t) => [arg(listId, t.UInt64)],
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  //LIST NFT TO RENT
  async GetListedNFTsIds() {
    try {
      const result = await fcl.query({
        cadence: `
                    import RentNFTV4 from 0xae95963d3be2cd41

                    pub fun main(): [UInt64]{
                        return RentNFTV4.getListedNfts()
                    }
                `,
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  //LIST OF ALREADY RENTED NFTS
  async GetRentedNFTListIds() {
    try {
      const result = await fcl.query({
        cadence: `
                    import RentNFTV4 from 0xae95963d3be2cd41

                    pub fun main(): [UInt64]{
                        return RentNFTV4.rentedNftList.keys
                    }
                `,
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  //LIST OF ALREADY RENTED NFTS
  async GetRentedNFTListData(listId) {
    try {
      const result = await fcl.query({
        cadence: `
                    import RentNFTV4 from 0xae95963d3be2cd41

                    pub fun main(id: UInt64): RentNFTV4.NftListedData {
                        return RentNFTV4.rentedNftList[id]!
                    }
                `,
        args: (arg, t) => [arg(listId, t.UInt64)],
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  //MINT EXAMPLE NFT
  async GetExampleNFTIds(address) {
    try {
      const result = await fcl.query({
        cadence: `
                    import ExampleNFT from 0xfe2d32e031469a6d
                    import NonFungibleToken from 0x631e88ae7f1d7c20

                    
                    pub fun main(address: Address): [UInt64] {
                        let cap = getAccount(address).getCapability(ExampleNFT.CollectionPublicPath).borrow<&{NonFungibleToken.CollectionPublic}>()!
                    
                        return cap.getIDs()
                    }
                `,
        args: (arg, t) => [arg(address, t.Address)],
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async GetOpenScrowsIDs() {
    try {
      const result = await fcl.query({
        cadence: `
                    import RentNFTV4 from 0xae95963d3be2cd41
                    
                    pub fun main(): [UInt64] {
                        let account = getAccount(0xae95963d3be2cd41)
                        let pubCollec = account.getCapability<&{RentNFTV4.ScrowPublicCollection}>(/public/RentNFTV4ScrowCollection).borrow() ?? panic("No good")
                        return pubCollec.getOpenScrowsIDs()
                      }
                `,
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async GetEndedScrowsIDs() {
    try {
      const result = await fcl.query({
        cadence: `
                    import RentNFTV4 from 0xae95963d3be2cd41
                    
                    pub fun main(): [UInt64] {
                        let account = getAccount(0xae95963d3be2cd41)
                        let pubCollec = account.getCapability<&{RentNFTV4.ScrowPublicCollection}>(/public/RentNFTV4ScrowCollection).borrow() ?? panic("No good")
                        return pubCollec.getEndedScrowIDs()
                      }
                `,
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async GetOpenScrowData(scrowId) {
    try {
      const result = await fcl.query({
        cadence: `
                    import RentNFTV4 from 0xae95963d3be2cd41
                    
                    pub fun main(scrowId: UInt64): RentNFTV4.ScrowData {
                        let account = getAccount(0xae95963d3be2cd41)
                        let pubCollec = account.getCapability<&{RentNFTV4.ScrowPublicCollection}>(/public/RentNFTV4ScrowCollection).borrow()!
                        return pubCollec.getScrowData(scrowId: scrowId)!
                    }
                `,
        args: (arg, t) => [arg(scrowId, t.UInt64)],
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async GetEndedScrowData(scrowId) {
    try {
      const result = await fcl.query({
        cadence: `
                    import RentNFTV4 from 0xae95963d3be2cd41
                    
                    pub fun main(scrowId: UInt64): RentNFTV4.ScrowData {
                        let account = getAccount(0xae95963d3be2cd41)
                        let pubCollec = account.getCapability<&{RentNFTV4.ScrowPublicCollection}>(/public/RentNFTV4ScrowCollection).borrow()!
                        return pubCollec.getEndedScrowData(scrowId: scrowId)
                    }
                `,
        args: (arg, t) => [arg(scrowId, t.UInt64)],
      });
      console.log(result);
      return result;
    } catch (error) {
      console.log(error);
    }
  }
}

export const rentNFTScriptsService = new RentNFTScriptsService();
