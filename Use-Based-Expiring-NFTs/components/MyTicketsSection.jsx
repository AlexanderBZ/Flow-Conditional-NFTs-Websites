import React, { useCallback, useEffect } from "react";
import styled from "styled-components";
import { useBasedNFTTransactionsService } from "../flow/services/UseBasedNFTTransactionsService";

export default function MyTicketsSection({nfts}) {

  const useTicket = (id) => {
     useBasedNFTTransactionsService.UpdateUseBased(id)
}

  return (
    <Wrapper>
      <h2>My Tickets</h2>
      <p>
        Use your ticket to get in the game! Once you use it the NFT will stay on
        your wallet, but you will not be able to get in again if you choose to
        leave!
      </p>
      <TicketSection>
        {nfts.userAddress != null && nfts.userAddress.length > 0 ? (
          nfts.userAddress.map((nft, index) => {
            return (
              <TicketWrapper key={index}>
                <p>{nft.id}</p>
                <p>{nft.name}</p>
                <p>{nft.description}</p>
                <img src={nft.thumbnail} alt="thumbnail" />
                <p>{nft.price}</p>
                <p>{nft.uses}</p>
                {nft.expired ? 
                <p>This ticked was used already!</p>
                : 
                <button onClick={() => useTicket(nft.id)}>USE YOUR TICKET</button>
                }
              </TicketWrapper>
            );
          })
        ) : (
          <h4>You don't have any Tickets, buy one!</h4>
        )}
      </TicketSection>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #76aaf8;
  padding: 20px;
  box-sizing: border-box;
`;

const TicketSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #c2daf8;
  padding: 20px;
  gap: 30px;
  box-sizing: border-box;
`;

const TicketWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-width: 250px;
  background-color: #ffffff;
  border-radius: 20px;
  padding: 20px;
  box-sizing: border-box;

  img {
    width: 200px;
    height: 100%;
    object-fit: cover;
    border-radius: 20px;
  }

  button {
    background-color: #006ff7;
    border: none;
    border-radius: 20px;
    padding: 10px;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #76aaf8;
    }
  }
`;
