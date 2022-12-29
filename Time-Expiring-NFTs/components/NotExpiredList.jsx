import React, { useEffect } from "react";
import styled from "styled-components";
import * as fcl from "@onflow/fcl";
import { GET_NOT_EXPIRED_NFTS } from "../flow/cadence/scripts/getNotExpiredNfts";

export default function NotExpiredList() {
  const [notExpiredNfts, setNotExpiredNfts] = React.useState([]);

  useEffect(() => {
    getNotExpiredList();
  }, []);

  async function getNotExpiredList() {
    try {
      const res = await fcl.query({
        cadence: GET_NOT_EXPIRED_NFTS,
      });
      setNotExpiredNfts(Object.entries(res));
    } catch (error) {
      console.log("err:", error);
    }
  }

  const convert = (timestamp) => {
    //convert timestamp to date
    const date = new Date(timestamp * 1000);
    return date
  }

  async function validate(nftId) {
    try {
      const res = await fcl.mutate({
        cadence: `
        import TimeBasedExpirationNft  from 0xDeployer
        transaction(id: UInt64) {
          prepare(acct: AuthAccount){}
          execute {
            TimeBasedExpirationNft.addExpiredNFT(id: id)
          }
        }
        `,
        args: (arg, t) => [arg(nftId, t.UInt64)],
        limit: 999,
      });
      fcl.tx(res).subscribe((res) => {
        if (res.status === 4) {
          console.log("Transaction executed");
        }
      });

      console.log("txid", res);
    } catch (error) {
      console.log("err", error);
    }
  }

  return (
    <Wrapper>
      <h2>Not Expired NFTs List</h2>
      <button onClick={() => getNotExpiredList()}>Update Not Expired List</button>
      {notExpiredNfts.map((nft, index) => {
        const convertedNft = convert(nft[1])
        return (
          <div className="nft" key={index}>
            <div>
            <p>ID: {nft[0]}</p>
            </div>
            <div>
              <p>{}</p>
            <p>EXPIRED TIMESTAMP: {nft[1]}</p>
            <p>EXPIRED IN DATE: {convertedNft.toLocaleString()}</p>
            <button onClick={() => {
              validate(nft[0])
            }}>VALIDATE</button>
            </div>
          </div>
        );
      })}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .nft {
    padding: 20px;
    margin: 10px;
    background-color: #7676f8;
    border-radius: 20px;
  }
`;
