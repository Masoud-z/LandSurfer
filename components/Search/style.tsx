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

export const SearchContainer= styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

export const SearchBarContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 2rem;
    height: 10vh;
    background-color:  ${props=>(props.dark?'#2b3743':'white')};
    color: ${props=>(props.dark?'#fffeff':'#8b8b8b')};
    padding: 0 1vw;
    border-radius: 1rem;
    font-size: 2rem;
    
`

export const SearchBar = styled.input`
  width: 50vw;
  height: 100%;
  padding: 1vh 1vw;
  background-color: ${props=>(props.dark?'#2b3743':'white')};
  color: ${props=>(props.dark?'#fffeff':'#8b8b8b')};
  border: none;
  &:focus{
    border: none;
  }
  @media screen and (max-width: 1024px) {
      width: 45vw;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4 ,19.9vw);
    gap: 3vw 3vw;
    
    @media screen and (max-width: 1024px) {
      grid-template-columns: repeat(2 ,42vw);
    }

    @media screen and (max-width: 600px) {
      grid-template-columns: repeat(1 ,60vw);
      justify-content: center;
    }
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
    /* right: 50%; */
    color: ${props=>(props.dark?'white':'black')};
    font-size: 4rem;
    animation: ${rotate} 2s linear infinite;
`

export const Error= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    height: max-content;
    text-align: center;
    position: relative;
    top: 30vh;
    color: ${props=>(props.dark?'white':'black')};
    font-size: 4rem;
`