/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Page = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props=>(props.dark? '#202d36': '#fafafa')};
`

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props=>(props.dark? '#2b3743': '#fff')};
    color: ${props =>(props.dark?'#fff':'#000')};
    padding: 4vh 5vw;
`

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 2vh 5vw;
`








