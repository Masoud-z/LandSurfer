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


export const Flex = styled.div<CustomProps>`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 4vh 0 6vh;
    color: ${props=>(props.dark?'white':'black')};
`

export const Button = styled.button<CustomProps>`
    color: ${props=>(props.dark?'white':'black')};
    background-color: ${props=>(props.dark?'#2b3743':'white')};
    padding: 0.5rem 1.5rem;
    box-shadow: 0px 0px 1px rgba(43, 55, 67,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 4px;
    
    &:hover{
        cursor: pointer;
    }

    & > span{
        padding-left: 7px;
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




