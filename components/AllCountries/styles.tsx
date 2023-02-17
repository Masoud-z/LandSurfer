/** @jsxImportSource @emotion/react */
import { css,keyframes } from '@emotion/react';
import styled from '@emotion/styled';


type CustomProps = {
	dark: boolean;
	show?: boolean;
};

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



export const Flex = styled.div<CustomProps>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 4vh 0 6vh;
    color: ${props=>(props.dark?'white':'black')};
`

export const SearchBar = styled.input<CustomProps>`
  width: 25vw;
  height: 6vh;
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


export const SearchContainer = styled.div<CustomProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 6vh;
    background-color:  ${props=>(props.dark?'#2b3743':'white')};
    color: ${props=>(props.dark?'#fffeff':'#8b8b8b')};
    padding: 0 1vw;
    border-radius: 8px;
    
`

export const Filter = styled.select<CustomProps>`
    width: 14vw;
    height: 6vh;
    padding: 1vh 1vw;
    background-color: ${props=>(props.dark?'#2b3743':'white')};
    color: ${props=>(props.dark?'white':'black')};
    border: none;
    border-radius: 8px;
    &:focus{
        border: none;
    }
    @media screen and (max-width: 1024px) {
      width: 35vw;
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

export const Loading = styled.div<CustomProps>`
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

export const Error= styled.div<CustomProps>`
    display: flex;
    align-items: center;
    justify-content: center;
    width: max-content;
    height: max-content;
    text-align: center;
    position: relative;
    top: 30vh;
    right: -50%;
    transform: translateX(-50%);
    color: ${props=>(props.dark?'white':'black')};
    font-size: 4rem;
`

export const ScrollUpContainer = styled.h4<CustomProps>`
  position: fixed;
  right: 0;
  bottom: ${props=>(props.show ? '23vh' : '-20vh')};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: linear 0.4s;
  color: ${props=>(props.dark?'white':'black')};
  transform: rotate(90deg);
  &:hover{
    color: ${props=>(props.dark?'#aaa':'#888')};
    cursor: pointer;
  }
  &::after{
    content: '';
    transform: rotate(90deg);
    position: fixed;
    width: 1px;
    height: 22vh;
    right: -12vh;
    background-color: ${props=>(props.dark?'white':'black')};
  }
`







