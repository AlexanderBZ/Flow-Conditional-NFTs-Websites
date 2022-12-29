import React, { useEffect } from "react";
import styled from "styled-components";
import * as fcl from "@onflow/fcl";

export default function TotalSupply() {
  const [totalSupply, setTotalSupply] = React.useState(0);

  useEffect(() => {
    getTotalSupply();
  }, []);

  async function getTotalSupply() {
    try {
      const res = await fcl.query({
        cadence: `
        import TimeBasedExpirationNft from 0xDeployer
        
        pub fun main (): UInt64 {
                return TimeBasedExpirationNft.totalSupply
        }
        `,
      });
      setTotalSupply(res);
    } catch (error) {
      console.log("err:", error);
    }
  }

  return (
    <Wrapper>
      <h2>Total Supply</h2>
      <button onClick={() => getTotalSupply()}>Get Total Supply</button>
      <p>{totalSupply}</p>
    </Wrapper>
  );
}

const Wrapper = styled.div``;
