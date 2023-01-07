import React from 'react'
import styled from 'styled-components'
import MintSection from './MintSection'
import MyTicketsSection from './MyTicketsSection'

export default function Main(nfts) {
  return (
    <Wrapper>
        <h1>Used Based NFTs</h1>
        <MintSection />
        <MyTicketsSection nfts={nfts}/>
    </Wrapper>
  )
}

const Wrapper = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 100%;
    min-height: 80vh;
    background-color: #f1f1f1;
    padding: 20px;
    box-sizing: border-box;
`