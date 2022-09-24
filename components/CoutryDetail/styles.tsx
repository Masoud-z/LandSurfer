/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';


export const Flex = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin: 4vh 0 6vh;
    color: ${props=>(props.dark?'white':'black')};
`

export const BackButton = styled.button`
    color: ${props=>(props.dark?'white':'black')};
    background-color: ${props=>(props.dark?'#2b3743':'white')};
    padding: 0.5rem 1.5rem;
    box-shadow: 0px 0px 1px rgba(43, 55, 67,0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 4px;

    & > span{
        padding-left: 7px;
    }
` 



