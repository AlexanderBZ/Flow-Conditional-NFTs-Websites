import React, {useEffect} from 'react'
import styled from 'styled-components'
import * as fcl from "@onflow/fcl";
import { GET_EXPIRED_NFTS } from '../flow/cadence/scripts/getExpiredNfts';

export default function ExpiredList() {
    const [expiredNfts, setExpiredNfts] = React.useState([])

    useEffect(() => {
        getExpiredList()
    }, [])

    console.log(expiredNfts)
    
    async function getExpiredList() {
        try {
          const res = await fcl.query({
            cadence: GET_EXPIRED_NFTS,
          });
          setExpiredNfts(res)
        } catch (error) { console.log("err:", error); }
      }

  return (
    <Wrapper>
        <h2>Expired NFTs List</h2>
        <button onClick={() => getExpiredList()}>Update List</button>
        {expiredNfts.map((nft, index) => {
            return (
                <Wrapper key={index}>
                    <p>{nft}</p>
                </Wrapper>
            )
        })
        }

    </Wrapper>
  )
}

const Wrapper = styled.div`
    p{
    padding: 20px;
    margin: 20px;
    background-color: #fa5656;
    border-radius: 20px;
    }
`