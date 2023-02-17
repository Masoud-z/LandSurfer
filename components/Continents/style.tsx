/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
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


export const AllContinentsContainer = styled.div<CustomProps>`
    margin: 0 ;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    overflow: hidden;
    color: ${props=>(props.dark? 'white': 'black')};
    & > h2{
      margin-top: 2rem;
    }
`

export const ContinentContainer = styled.div<CustomProps>`
padding: 1rem;
    width: 100%;
    height: 30vh;
    display: flex;
    align-items: center;
    gap: 1rem;
    background-color: ${props=>(props.dark? '#2b3743': 'white')};
    overflow: hidden;
    overflow-x: scroll;
    border-radius: 2rem;

    &::-webkit-scrollbar {
      height: 5px;
    }
    
    &::-webkit-scrollbar-track {
      box-shadow: inset 0 0 1px grey;
      border-radius: 10px;
    }
    
    &::-webkit-scrollbar-thumb {
      background: red;
      border-radius: 10px;
    }

    & > h3{
        padding-right: 2rem;
        &:hover{
            cursor: pointer;
        }
    }
`

export const Flag = styled.img`
    margin: 0.5rem;
    height: 100%;
    transition: linear 0.4s;
    &:hover{
        cursor: pointer;
        border: 1px solid red;
        scale: 1.05;
    }
`

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(4 ,19.9vw);
    gap: 3vw 3vw;
    margin-top: 2rem;
    
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

export const LoadingContinent = styled.div<CustomProps>`
  color: ${props=>(props.dark?'white':'black')};
`