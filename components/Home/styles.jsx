/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';



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

export const FlexWrap = styled.div`
    display: grid;
    grid-template-columns: repeat(4 ,1fr);
    gap: 3vw 1vw;
`






