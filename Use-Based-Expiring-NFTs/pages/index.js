import Head from "next/head";
import styles from "../styles/Home.module.css";
import React, { useState, useEffect, useCallback } from "react";
import * as fcl from "@onflow/fcl";
import "../flow/config.js";
import Navbar from "../components/Navbar";
import Main from "../components/Main";
import { flowScriptService } from "../flow/services/FlowScriptService";
import { useBasedNFTScriptsService } from "../flow/services/UseBasedNFTScriptsService";

export default function Home() {
  const [user, setUser] = useState({ loggedIn: false, addr: undefined });
  const [balance, setBalance] = useState(0);
  const [nfts, setNfts] = React.useState([]);

  const getBalance = useCallback(async (address) => {
    const balance = await flowScriptService.GetBalance(address);
    setBalance(balance);
  }, [])

  const getNFTs = useCallback(async (userAddress) => {
    const res = await useBasedNFTScriptsService.GetNFTs(userAddress);
    setNfts(res);
  }, []);

  useEffect(() => {
    fcl.currentUser.subscribe(setUser);
    if (user.addr != "") {
      getBalance(user.addr);
      getNFTs(user.addr);
      console.log("BALANCEE",balance)
      console.log("address", user.addr)
      console.log('TESTTT',nfts)
    }
  }, [user.addr, balance]);

  return (
    <div className={styles.container}>
      <Head>
        <title>Used Based NFTs - Flow Blockchain Sample</title>
        <meta name="description" content="Used Based NFTs - Flow Blockchain Sample" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar user={user} setUser={setUser} flowBalance={balance}/>
      <Main userAddress={nfts}/>
    </div>
  );
}
