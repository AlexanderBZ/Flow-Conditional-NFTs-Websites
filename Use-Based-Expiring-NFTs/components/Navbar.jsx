import React, { useState, useEffect } from "react";
import styled from "styled-components";
import * as fcl from "@onflow/fcl";
import "../flow/config.js";

export default function Navbar(user, setUser, balance) {
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

  return (
    <Wrapper>
      <h2>Used Based NFTs</h2>
      <button onClick={() => logIn()}>Login</button>
      <button onClick={() => logOut()}>LogOut</button>
      <p>{user.addr}</p>
      <p>{balance}</p>
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  width: 100%;
  background-color: #f1f1f1;
  top: 0;
  display: flex;
  justify-content: space-between;
`;
