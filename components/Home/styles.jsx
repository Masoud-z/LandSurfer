/** @jsxImportSource @emotion/react */
import { css,keyframes } from '@emotion/react';
import styled from '@emotion/styled';


const rotate = keyframes`
    0% {
    transform: rotate(0deg);
  }

  20% {
    transform: rotate(90degdeg);
  }

  60% {
    transform: rotate(270deg);
  }

  100% {
    transform: rotate(360deg);
  }
`



export const Flex = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 2vh 0 4vh;
    color: ${props=>(props.dark?'white':'black')};
`

export const SearchBar = styled.input`
  width: 25vw;
  height: 6vh;
  padding: 1vh 1vw;
  background-color: ${props=>(props.dark?'#2b3743':'white')};
  color: ${props=>(props.dark?'#fffeff':'#8b8b8b')};
  border: none;
  &:focus{
    border: none;
  }
`


export const SearchContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6vh;
    background-color:  ${props=>(props.dark?'#2b3743':'white')};
    color: ${props=>(props.dark?'#fffeff':'#8b8b8b')};
    padding: 0 1vw;
    border-radius: 2px;
`

export const Filter = styled.select`
    width: 14vw;
    height: 6vh;
    padding: 1vh 1vw;
    background-color: ${props=>(props.dark?'#2b3743':'white')};
    color: ${props=>(props.dark?'white':'black')};
    border: none;
    &:focus{
        border: none;
    }
    border-radius: 2px;
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4 ,19.9vw);
    gap: 3vw 3vw;
`

export const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    height: max-content;
    text-align: center;
    position: relative;
    top: 30vh;
    right: -50%;
    color: ${props=>(props.dark?'white':'black')};
    font-size: 4rem;
    animation: ${rotate} 2s linear infinite;
`






