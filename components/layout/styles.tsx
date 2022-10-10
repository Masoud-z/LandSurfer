/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Page = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props=>(props.dark? 'rgba(43, 43, 44,1)': '#fafafa')};
    overflow: hidden;
    background-image: url('./world.png');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

`

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props=>(props.dark? 'rgb(43, 43, 44)': '#fff')};
    color: ${props =>(props.dark?'#fff':'#000')};
    box-shadow: 3px 3px 4px ${props =>(props.dark ? '#222' : '#ccc')};
    padding: 4vh 5vw;
`

export const DarkModeContainer= styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1vw;
    cursor: pointer;
    color: ${props =>(props.dark?'#fff':'rgba(0, 0, 0,0.4)')};
`

export const MainContainer = styled.div`
    width: 100%;
    min-height: 90vh;
    padding: 2vh 5vw;
`








