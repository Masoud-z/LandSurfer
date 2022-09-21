/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Page = styled.div`
    width: 100%;
    height: 100%;
    background-color: ${props=>(props.dark? '#202d36': 'white')};
`

export const Header = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${props=>(props.dark? '#2b3743': 'white')};
    color: ${props =>(props.dark?'#fcffff':'#000')};
    padding: 4vh 5vw;
`

export const MainContainer = styled.div`
    width: 100%;
    height: 100%;
    padding: 2vh 5vw;
`

export const Flex = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 2vh 0;
    color: ${props=>(props.dark?'white':'black')};
`

export const SearchBar = styled.input`
  width: 25vw;
  height: 6vh;
  padding: 1vh 1vw;
  background-color: ${props=>(props.dark?'#2b3743':'white')};
  color: ${props=>(props.dark?'white':'black')};
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
    color: ${props=>(props.dark?'white':'black')};
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
    grid-template-columns:repeat(4, 1fr);
    gap: 1vw;
`






