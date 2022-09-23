/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Page = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props=>(props.dark? '#202d36': '#fafafa')};
    overflow: hidden;
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

export const DarkModeContainer= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;
`

export const MainContainer = styled.div`
    width: 100%;
    min-height: 90vh;
    padding: 2vh 5vw;
`








