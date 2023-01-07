import React, { useState, useCallback } from "react";

import styled from "styled-components";

import { rentNFTTransactionsService } from "../flow/services/RentNFTTransactionsService.jsx";
import { rentNFTScriptsService } from "../flow/services/RentNFTScriptsService.jsx";
import Navbar from "../components/Navbar.jsx";

export default function rentNFT() {
  const [exampleNftIds, setExampleNftIds] = useState([]);
  const [listedNFTs, setListedNFTs] = useState([]);
  const [listedNftData, setListedNftData] = useState([]);
  const [openScrowIds, setOpenScrowIds] = useState([]);
  const [endedScrowsIds, setEndedScrowsIds] = useState([]);
  const [openScrowData, setOpenScrowData] = useState([]);
  const [endedScrowData, setEndedScrowData] = useState([]);
  const [rentedNftIds, setRentedNftIds] = useState([]);
  const [rentedNftListData, setRentedNftListData] = useState([]);

  //Transactions
  const mintExampleNFT = useCallback(async () => {
    const result = await rentNFTTransactionsService.MintExampleNFT();
    console.log(result);
  }, []);

  const listNFT = useCallback(async (nftId, price, collateral, deadline) => {
    const result = await rentNFTTransactionsService.ListNftToRent(
      nftId,
      price,
      collateral,
      deadline
    );
    console.log(result);
  }, []);

  const rentNFT = useCallback(async (nftToRentUuid) => {
    const result = await rentNFTTransactionsService.RentListedNFT(
      nftToRentUuid
    );
    console.log(result);
  }, []);

  const finishScrow = useCallback(async (scrowId) => {
    const result = await rentNFTTransactionsService.FinishScrow(scrowId);
    console.log(result);
  });

  const returnNftToOwner = useCallback(async (scrowId) => {
    const result = await rentNFTTransactionsService.ReturnRentedNftToOwner(
      scrowId
    );
    console.log(result);
  });

  const removeNftFromList = useCallback(async (nftToRentUuid) => {
    const result = await rentNFTTransactionsService.RemoveNftFromList(
      nftToRentUuid
    );
    console.log(result);
  });

  //Scripts

  // ----------------- LIST FUNCTIONS -----------------
  const getListedNftData = useCallback(async (scrowId) => {
    const result = await rentNFTScriptsService.GetListedNFTData(scrowId);
    setListedNftData(result);
    console.log(listedNftData);
  }, []);

  const getListedNFTs = useCallback(async () => {
    const result = await rentNFTScriptsService.GetListedNFTsIds();
    setListedNFTs(result);
  }, []);

  const getExampleNFTIds = useCallback(async (addr) => {
    const result = await rentNFTScriptsService.GetExampleNFTIds(addr);
    setExampleNftIds(result);
  });

  const getRentedNFTIds = useCallback(async () => {
    const result = await rentNFTScriptsService.GetRentedNFTListIds();
    setRentedNftIds(result);
  });

  const getRentedNFTListData = useCallback(async (listId) => {
    const result = await rentNFTScriptsService.GetRentedNFTListData(listId);
    setRentedNftListData(result);
    console.log(result);
  });
  // ----------------- LIST FUNCTIONS -----------------

  // ----------------- SCROW FUNCTIONS -----------------
  const getOpenScrowsIds = useCallback(async () => {
    const result = await rentNFTScriptsService.GetOpenScrowsIDs();
    setOpenScrowIds(result);
  });

  const getEndedScrowsIds = useCallback(async () => {
    const result = await rentNFTScriptsService.GetEndedScrowsIDs();
    setEndedScrowsIds(result);
  });

  const getOpenScrowData = useCallback(async (scrowId) => {
    const result = await rentNFTScriptsService.GetOpenScrowData(scrowId);
    setOpenScrowData(result);
    console.log(openScrowData);
  });

  const getEndedScrowData = useCallback(async (scrowId) => {
    const result = await rentNFTScriptsService.GetEndedScrowData(scrowId);
    setEndedScrowData(result);
    console.log(endedScrowData);
  });
  // ----------------- SCROW FUNCTIONS -----------------

  // ----------------- FORM FUNCTIONS -----------------
  const getExampleIds = (e) => {
    e.preventDefault();
    getExampleNFTIds(e.target[0].value);
  };

  const getListedNftDataSubmit = (e) => {
    e.preventDefault();
    getListedNftData(e.target[0].value);
  };

  const listNftToRent = (e, id) => {
    e.preventDefault();
    listNFT(id, e.target[0].value, e.target[1].value, e.target[2].value);
  };

  const returnNFTToOwnerSubmit = (e) => {
    e.preventDefault();
    returnNftToOwner(e.target[0].value);
  };

  const finishScrowSubmit = (e) => {
    e.preventDefault();
    finishScrow(e.target[0].value);
  };

  const getOpenScrowDataSubmit = (e) => {
    e.preventDefault();
    getOpenScrowData(e.target[0].value);
  };

  const getEndedScrowDataSubmit = (e) => {
    e.preventDefault();
    getEndedScrowData(e.target[0].value);
  };

  const getRentedNftListSubmit = (e) => {
    e.preventDefault();
    getRentedNFTListData(e.target[0].value);
    console.log(rentedNftListData);
  };
  // ----------------- FORM FUNCTIONS -----------------

  //Function that convert timestap to date
  const convertTimestampToDate = (timestamp) => {
    const date = new Date(timestamp * 1000).toString();
    return date;
  };

  return (
    <Wrapper>
      <Navbar />
      <section className="nft flexColumn">
        <h1>Mint NFT Section</h1>
        <p>Example NFT</p>
        <button onClick={() => mintExampleNFT()}>Mint Example NFT</button>
        <form onSubmit={(e) => getExampleIds(e)}>
          <input type="text" />
          <button type="submit">Get MY Example NFT IDs</button>
        </form>
        <div>
          <p>NFT IDS</p>
          <div className="ids">
            {exampleNftIds != null &&
              exampleNftIds.map((id, index) => {
                return (
                  <div className="nftCard" key={index}>
                    <p>{id}</p>
                    <form onSubmit={(e) => listNftToRent(e, id)}>
                      <input type="number" placeholder="price" />
                      <input type="number" placeholder="collateral" />
                      <input type="number" placeholder="deadline" />
                      <button type="submit">List NFT to Rent</button>
                    </form>
                  </div>
                );
              })}
          </div>
        </div>
      </section>

      {/* ------------------ LIST NFT SECTION ------------------ */}
      <section className="rentNftList flexColumn">
        <h1>List NFT Section</h1>
        <button onClick={() => getListedNFTs()}>Listed NFTs</button>
        <div>
          <p>LISTED NFTs</p>
          <div className="ids">
            {listedNFTs.map((id, index) => {
              return <p key={index}>{id}</p>;
            })}
          </div>
        </div>

        <form onSubmit={(e) => getListedNftDataSubmit(e)}>
          <input type="text" />
          <button type="submit">Listed NFT Data</button>
          <div className="listedNft">
            <p>LISTED NFT DATA</p>
            {listedNftData != null && (
              <>
                <p>List Id: {listedNftData.listId}</p>
                <p>Id: {listedNftData.id}</p>
                <p>Price: {listedNftData.price}</p>
                <p>Collateral: {listedNftData.collateral}</p>
                <p>Deadline: {listedNftData.deadline}</p>
                <p>
                  Already rented: {listedNftData.alreadyRented ? "Yes" : "No"}
                </p>
                {!listedNftData.alreadyRented && (
                  <>
                    <button onClick={() => rentNFT(listedNftData.listId)}>
                      Rent NFT
                    </button>
                    <button
                      onClick={() => removeNftFromList(listedNftData.listId)}
                    >
                      Remove of list
                    </button>
                  </>
                )}
              </>
            )}
          </div>
        </form>

        <button onClick={() => getRentedNFTIds()}>Rented List NFTs</button>
        <div>
          <p>RENTED LISTED NFTs</p>
          <div className="ids">
            {rentedNftIds != null &&
              rentedNftIds.map((id, index) => {
                return <p key={index}>{id}</p>;
              })}
          </div>
        </div>

        <form onSubmit={(e) => getRentedNftListSubmit(e)}>
          <input type="text" />
          <button type="submit">Rented List NFT Data</button>
          <div className="listedNft">
            <p>RENTED LISTED NFT DATA</p>
            {rentedNftIds != null && (
              <>
                <p>List Id: {rentedNftIds.listId}</p>
                <p>Id: {rentedNftIds.id}</p>
                <p>Price: {rentedNftIds.price}</p>
                <p>Collateral: {rentedNftIds.collateral}</p>
                <p>Deadline: {rentedNftIds.deadline}</p>
              </>
            )}
          </div>
        </form>
      </section>

      {/* ------------------ SCROW SECTION ------------------ */}
      <section className="scrow flexColumn">
        <h1>Scrow Section</h1>
        <button onClick={() => getOpenScrowsIds()}>Get Scrow Ids</button>
        <div>
          <p>OPEN SCROW IDs</p>
          <div className="ids">
            {openScrowIds != null &&
              openScrowIds.map((id, index) => {
                return <p key={index}>{id}</p>;
              })}
          </div>
        </div>

        <form onSubmit={(e) => getOpenScrowDataSubmit(e)}>
          <input type="text" />
          <button type="submit">Get Open Scrow Data</button>
          {openScrowData != null && (
            <>
              <p>Scrow Data</p>
              <p>Nft Id: {openScrowData.nftId}</p>
              <p>Nft Uuid: {openScrowData.nftUuid}</p>
              <p>Deadline(timestamp): {openScrowData.deadlineOfRent}</p>
              <p>
                End of Rent: {convertTimestampToDate(openScrowData.endOfRent)}
              </p>
            </>
          )}
        </form>
        <form onSubmit={(e) => returnNFTToOwnerSubmit(e)}>
          <input type="text" placeholder="Scrow ID" />
          <button type="submit">Return NFT To Owner</button>
        </form>

        <form onSubmit={(e) => finishScrowSubmit(e)}>
          <input type="text" placeholder="Scrow ID" />
          <button type="submit">Finish Scrow</button>
        </form>

        <div className="ended">
          <button onClick={() => getEndedScrowsIds()}>
            Get Ended Scrow Ids
          </button>
          <div>
            <p>ENDED SCROW IDs</p>
            <div className="ids">
              {endedScrowsIds != null &&
                endedScrowsIds.map((id, index) => {
                  return <p key={index}>{id}</p>;
                })}
            </div>
          </div>

          <form onSubmit={(e) => getEndedScrowDataSubmit(e)}>
            <input type="text" placeholder="Scrow ID" />
            <button type="submit">Get Ended Scrow Data</button>
            {endedScrowData != null && (
              <>
                <p>Ended Scrow Data</p>
                <p>Nft Id: {endedScrowData.nftId}</p>
                <p>Nft Uuid: {endedScrowData.nftUuid}</p>
                <p>Deadline(timestamp): {endedScrowData.deadlineOfRent}</p>
                <p>
                  End of Rent:{" "}
                  {convertTimestampToDate(endedScrowData.endOfRent)}
                </p>
                <p>
                  Date of End:{" "}
                  {convertTimestampToDate(endedScrowData.dateOfEnd)}
                </p>
              </>
            )}
          </form>
        </div>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  height: 100%;
  min-height: 100vh;
  margin-top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 100px;
  padding: 100px 0;

  section {
    width: 100%;
    height: 100%;
    min-height: 80vh;
    padding: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .flexColumn {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }

  .ids {
    display: flex;
    gap: 20px;

    p {
      border: 1px solid black;
      padding: 5px;
    }
  }

  .listedNft {
    border: 1px solid black;
    padding: 5px 20px;
    margin: 10px;
  }

  .ended {
    padding: 80px 0;
  }
`;
