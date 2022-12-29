import React, { useState, useEffect } from "react";
import * as fcl from "@onflow/fcl";
import "../../flow/config.js";

import serverAuthorization from "../../util/Authorization";

class RentNFTTransactionsService {
  //FINISH SCROW
  async FinishScrow(scrowId) {
    try {
      const txId = await fcl.mutate({
        cadence: `
                    import RentNFTV4 from 0xae95963d3be2cd41

                    transaction(scrowId: UInt64){   
                        prepare(signer: AuthAccount, admin: AuthAccount){
                            let scrowCollection = admin.borrow<&RentNFTV4.ScrowCollection>(from: /storage/RentNFTV4ScrowCollection)!
                            scrowCollection.finishScrow(scrowId: scrowId)
                        }
                        execute{}
                    }
                `,
        args: (arg, t) => [arg(scrowId, t.UInt64)],
        authorizations: [fcl.currentUser, serverAuthorization],
        limit: 9999,
      });

      fcl.tx(txId).subscribe((txStatus) => {
        console.log("Transaction Status: ", txStatus);
        if (
          txStatus.errorMessage.includes("Rent still on time!") &&
          txStatus.status == 4
        ) {
          alert("Rent still on time!");
        }
      });
      //Rent still on time!
    } catch (error) {
      console.log(error);
    }
  }

  //LIST NFT TO RENT
  async ListNftToRent(nftId, price, collateral, deadline) {
    try {
      const txId = await fcl.mutate({
        cadence: `
                import RentNFTV4 from 0xae95963d3be2cd41
                import ExampleNFT from 0xfe2d32e031469a6d
                import NonFungibleToken from 0x631e88ae7f1d7c20
                import FungibleToken from 0x9a0766d93b6608b7
                import FlowToken from 0x7e60df042a9c0868
                
                transaction(nftId: UInt64, price: UInt64, collateral: UInt64, deadLine: UInt64){
                    let flowTokenNftCap: Capability<&{FungibleToken.Receiver}>
                    let nftCap: Capability<&{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>
                        
                    prepare(signer: AuthAccount){
                        self.flowTokenNftCap = signer.getCapability<&FlowToken.Vault{FungibleToken.Receiver}>(/public/flowTokenReceiver)
                
                          if !signer.getCapability<&ExampleNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(/private/RentNFTV4Provider)!.check() {
                                signer.unlink(/private/RentNFTV4Provider)
                                signer.link<&ExampleNFT.Collection{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(/private/RentNFTV4Provider, target: ExampleNFT.CollectionStoragePath)
                        }
                
                        self.nftCap = signer.getCapability<&{NonFungibleToken.Provider,NonFungibleToken.CollectionPublic}>(/private/RentNFTV4Provider)
                    }
                    execute{
                
                        let nftRef = self.nftCap.borrow()!.borrowNFT(id: nftId)
                
                
                        RentNFTV4.listNFT(
                        _flowTokenNftOwnerPubCap: self.flowTokenNftCap, 
                        _nftOwnerCap: self.nftCap, 
                        _nftType: nftRef.getType(), 
                        _nftId: nftId, 
                        _nftUuid: nftRef.uuid, 
                        _priceToRent: UFix64(price), 
                        _collateralToRent: UFix64(collateral), 
                        _deadlineOfRent: UFix64(deadLine)
                        )
                
                        log("NFT Listed")
                    }
                }                
                `,
        args: (arg, t) => [
          arg(nftId, t.UInt64),
          arg(price, t.UInt64),
          arg(collateral, t.UInt64),
          arg(deadline, t.UInt64),
        ],
        limit: 9999,
      });

      fcl.tx(txId).subscribe((txStatus) => {
        console.log("Transaction Status: ", txStatus);
      });
    } catch (error) {
      console.log(error);
    }
  }

  //MINT EXAMPLE NFT
  async MintExampleNFT() {
    try {
      const txId = await fcl.mutate({
        cadence: `
                import ExampleNFT from 0xfe2d32e031469a6d
                import NonFungibleToken from 0x631e88ae7f1d7c20
                
                transaction(){
                  prepare(signer: AuthAccount, adm: AuthAccount){
                
                    let nftMinter = adm.borrow<&ExampleNFT.NFTMinter>(from: ExampleNFT.MinterStoragePath)!
                
                    if signer.borrow<&ExampleNFT.Collection>(from: ExampleNFT.CollectionStoragePath) == nil{
                      signer.save(<- ExampleNFT.createEmptyCollection(), to: ExampleNFT.CollectionStoragePath)
                      signer.link<&ExampleNFT.Collection{NonFungibleToken.CollectionPublic}>(ExampleNFT.CollectionPublicPath, target: ExampleNFT.CollectionStoragePath)
                    }
                
                    let signerCollection = signer.getCapability(ExampleNFT.CollectionPublicPath).borrow<&ExampleNFT.Collection{NonFungibleToken.CollectionPublic}>()!
                    let nft = nftMinter.mintNFT(
                    recipient: signerCollection, 
                    name: "Test NFT", 
                    description: "This it's a test NFT", 
                    thumbnail: "https://whateverrrr")
                  }
                  execute{
                    log("EXAMPLE NFT MINTED")
                  }
                }                
                `,
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

  async RemoveNftFromList(nftToRentUuid) {
    try {
      const txId = await fcl.mutate({
        cadence: `
                import ExampleNFT from 0xfe2d32e031469a6d
                import NonFungibleToken from 0x631e88ae7f1d7c20
                import FungibleToken from 0x9a0766d93b6608b7
                import RentNFTV4 from 0xae95963d3be2cd41
                
                transaction(nftToRentUuid: UInt64){
                    
                    prepare(signer: AuthAccount, admin: AuthAccount){
                        let rentNftAdmin = admin.borrow<&RentNFTV4.Admin>(from: /storage/RentNFTV4Admin)
                        let nftOwnerCap = signer.getCapability<&{NonFungibleToken.Provider, NonFungibleToken.CollectionPublic}>(/private/RentNFTV4Provider)
                        
                        rentNftAdmin!.destroyListing(listUuid: nftToRentUuid, nftOwnerCap: nftOwnerCap)
                    }
                
                    execute{}
                }`,
        args: (arg, t) => [arg(nftToRentUuid, t.UInt64)],
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

  async RentListedNFT(nftToRentUuid) {
    try {
      const txId = await fcl.mutate({
        cadence: `
                import ExampleNFT from 0xfe2d32e031469a6d
                import NonFungibleToken from 0x631e88ae7f1d7c20
                import FungibleToken from 0x9a0766d93b6608b7
                import RentNFTV4 from 0xae95963d3be2cd41


                transaction(nftToRentUuid: UInt64){
                    
                    prepare(signer: AuthAccount, admin: AuthAccount){
                        let rentNftAdmin = admin.borrow<&RentNFTV4.Admin>(from: /storage/RentNFTV4Admin)!

                        let renterNftPubCap = signer.getCapability<&{NonFungibleToken.CollectionPublic}>(ExampleNFT.CollectionPublicPath)
                        let renterFlowTokenPubCap = signer.getCapability<&{FungibleToken.Receiver}>(/public/flowTokenReceiver)

                        let nftData = RentNFTV4.getListedNftData(id: nftToRentUuid)
                        let collateral = nftData.collateral
                        let rentPrice = nftData.price
                        let paymentValue = collateral + rentPrice

                        let vaultRef = signer.borrow<&FungibleToken.Vault>(from: /storage/flowTokenVault) ?? panic("Could not borrow owner''s Vault reference")
                        let paymentToRentAndCollateral <- vaultRef.withdraw(amount: paymentValue)
                        
                        rentNftAdmin.rentListedNFT(
                        renterNftPubCap: renterNftPubCap, 
                        renterFlowTokenPubCap: renterFlowTokenPubCap, 
                        paymentToRentAndCollateral: <- paymentToRentAndCollateral, 
                        nftToRentUuid: nftToRentUuid)
                    }

                    execute{}
                }
                `,
        args: (arg, t) => [arg(nftToRentUuid, t.UInt64)],
        authorizations: [fcl.currentUser, serverAuthorization],
        limit: 9999,
      });

      fcl.tx(txId).subscribe((txStatus) => {
        console.log("Transaction Status: ", txStatus);
        if (
          txStatus.errorMessage.includes(
            "NFT does not exist in the collection!"
          ) &&
          txStatus.status == 4
        ) {
          alert("NFT does not exist in the collection!");
        } else if (
          txStatus.errorMessage.includes("NFT is already rented!") &&
          txStatus.status == 4
        ) {
          alert("NFT is already rented!");
        }
      });
    } catch (error) {
      console.log(error);
    }
  }

  async ReturnRentedNftToOwner(scrowId) {
    try {
      const txId = await fcl.mutate({
        cadence: `
                import ExampleNFT from 0xfe2d32e031469a6d
                import NonFungibleToken from 0x631e88ae7f1d7c20
                import FungibleToken from 0x9a0766d93b6608b7
                import RentNFTV4 from 0xae95963d3be2cd41
                
                transaction(scrowId: UInt64){
                    
                    prepare(signer: AuthAccount, admin: AuthAccount){
                        let scrowCollection = admin.borrow<&RentNFTV4.ScrowCollection>(from: /storage/RentNFTV4ScrowCollection)!
                        
                        let nftId = scrowCollection.getScrowData(scrowId: scrowId)!.nftId
                        
                        let signerCap = signer.borrow<&{NonFungibleToken.Provider}>(from: ExampleNFT.CollectionStoragePath)!
                        let _nftRented <- signerCap.withdraw(withdrawID: nftId)
                
                        let nftRenterFlowTokenPubCap = signer.getCapability<&{FungibleToken.Receiver}>(/public/flowTokenReceiver)
                        
                        scrowCollection.returnNftToOwner(scrowId: scrowId, nftRented: <- _nftRented, nftRenterFlowTokenPubCap: nftRenterFlowTokenPubCap)
                    }
                
                    execute{}
                }
                `,
        args: (arg, t) => [arg(scrowId, t.UInt64)],
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

export const rentNFTTransactionsService = new RentNFTTransactionsService();
