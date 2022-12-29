import React from 'react'
import styled from 'styled-components'

export default function ActionBox({fn, title}) {
    const [result, setResult] = React.useState(0)
    //function that convert hour to timestamp
    const convert = (e) => {
        const hour = e.target.value
        const timestamp = hour * 3600
        setResult(timestamp)
    }
  return (
    <Wrapper>
        <h2>Mint your Time Based NFT</h2>
        <p>How many hours will be this NFT valid?</p>
        <input type="number" defaultValue={0}  onChange={(e) => convert(e)}/>
        <button onClick={() => fn(result)}>{title}</button>
    </Wrapper>
  )
}

const Wrapper = styled.div`
    padding: 40px;
    margin: 10px;
    border: 1px solid black;
    background-color: transparent;
    font-size: 1rem;
    width: 300px;
    display: flex;
    flex-direction: column;
    gap: 10px;
`