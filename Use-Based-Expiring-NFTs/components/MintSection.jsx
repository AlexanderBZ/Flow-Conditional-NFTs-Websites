import React, { useCallback } from "react";
import styled from "styled-components";
import { useBasedNFTTransactionsService } from "../flow/services/UseBasedNFTTransactionsService";

export default function MintSection() {
    
    const mintTicket = useCallback(async (id, name, description, thumbnail, price) => {
        await useBasedNFTTransactionsService.MintUseBased(id, name, description, thumbnail, price);
    })
    // generate a random number between 1 and 100 as integer
    
    const random = () => {
      return Math.floor(Math.random() * 10000) + 1;
    }

  return (
    <Wrapper>
      <h2>Mint your ticket here!</h2>
      <p>
        Buy your ticket, select the best place that fits to you! After minted
        your ticket will be stored inside your wallet has a NFT! To use it, go
        to the Use Ticket section
      </p>
      <TicketSection>
        <TicketWrapper>
          <h4>Los Angeles Lakers x Boston Celtics</h4>
          <p>Date: now!</p>
          <p>Price: 3 FLOW</p>
          <button onClick={() => mintTicket(random(), "Los Angeles Lakers x Boston Celtics", "Classic Basketball Game", "https://www.nbcsports.com/sites/rsnunited/files/styles/article_hero_image/public/archive/assets_article/boston/2018/01/23/stream-celtics-lakers.jpg", "3.0")}>Mint</button>
        </TicketWrapper>
        <TicketWrapper>
          <h4>Golden State Warriors x Brooklyn Nets</h4>
          <p>Date: now!</p>
          <p>Price: 5 FLOW</p>
          <button onClick={() => mintTicket(random(), "Golden State Warriors x Brooklyn Nets", "Classic Basketball Game", "https://i1.wp.com/livebasketballbr.com/wp-content/uploads/2022/12/download-1.png?fit=225%2C225&ssl=1", "5.0")}>Mint</button>
        </TicketWrapper>
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
  background-color: #ff7575;
  padding: 20px;
  box-sizing: border-box;
`;

const TicketSection = styled.section`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: #ff7575;
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

  button {
    background-color: #ff7575;
    border: none;
    border-radius: 20px;
    padding: 10px;
    color: #ffffff;
    font-weight: bold;
    cursor: pointer;

    &:hover {
      background-color: #ff4d4d;
    }
  }
`;
