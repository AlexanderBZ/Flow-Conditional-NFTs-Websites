import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as fcl from "@onflow/fcl";
import "../flow/config.js";

export default function Navbar() {
  const [user, setUser] = useState({ loggedIn: false, addr: undefined });
  const [flow, setFlow] = useState(0);

  // console.log(user)

  useEffect(() => {
    fcl.currentUser.subscribe(setUser);
    if (user.addr != "") getFlow(user.addr);
  }, [user.addr]);

  const logOut = async () => {
    await fcl.unauthenticate();
    setUser({ addr: undefined, loggedIn: false });
  };

  const logIn = async () => {
    const res = await fcl.authenticate();
  };

  const signUp = () => {
    fcl.signUp();
  };

  async function getFlow(address) {
    try {
      const res = await fcl.query({
        cadence: `
                import FlowToken from 0x7e60df042a9c0868
                import FungibleToken from 0x9a0766d93b6608b7
  
                pub fun main(address: Address): UFix64{
                  let balanceVault =  getAccount(address).getCapability(/public/flowTokenBalance).borrow<&FlowToken.Vault{FungibleToken.Balance}>()!
                  return balanceVault.balance
                }`,
        args: (arg, t) => [arg(address, t.Address)],
      });
      setFlow(res);
    } catch (error) {
      console.log("err:", error);
    }
  }

  return (
    <Wrapper>
      <h2>Rent NFT</h2>
      <button onClick={() => logIn()}>Login</button>
      <button onClick={() => logOut()}>LogOut</button>
      <p>{user.addr}</p>
      <p>{flow}</p>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  background-color: #f1f1f1;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  padding: 10px 50px;
`;
