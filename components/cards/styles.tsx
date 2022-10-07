/** @jsxImportSource @emotion/react */
import { css, keyframes } from '@emotion/react';
import styled from '@emotion/styled';



export const CountryCard = styled.div`
    /* width: 19.9vw; */
    padding: 0;
    display: flex;
    flex-direction: column;
    background-color: ${props => (props.dark? '#2b3743':'white')};
    color: ${props => (props.dark?'white':  '#2b3743')};
    border: none;
    border-radius: 4px;
    box-shadow: 0px 0px 1px rgba(43, 55, 67,0.5);

    & > img{
        height: 50%;
    }

    &:hover{
        cursor: pointer;
    }
`

export const CountryCardDitail = styled.div`
    display: flex;
    flex-direction: column;
    padding: 3vh 1vw 1.5vh;
    & > h2{
        margin-bottom: 2vh;
    }
    & > p{
        & > b{
            color: ${props => (props.dark?'white':  'black')};
        }
        color: ${props => (props.dark?'#d9e2e9':  '#2b3743')}
    }
`

export const Flex = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4vh 0 4vh;
    color: ${props=>(props.dark?'white':'black')};
    & > button{
        padding: 0.5rem;
    }
    @media screen and (max-width: 1024px) {
        flex-direction: column;
        justify-content: center;
    }

    
`


export const Grid = styled.div`
    display: grid;
    height: 350px;
    grid-template-columns: 45% 45%;
    gap: 10%;
    margin-top: 7vh;
    margin-bottom: 5vh;

    & > img{
        max-height: 60vh;
        width: 100%;
    } 

    @media screen and (max-width: 1024px) {
        grid-template-columns: 70%;
        justify-content: center;
        height: auto;
    }
`

export const FlexColumn = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: fit-content;
    padding: 2vh 0;
    color: ${props=>(props.dark?'white':'black')};
    & > p{
        & > b{
            color: ${props => (props.dark?'white':  'black')};
        }
        color: ${props => (props.dark?'#d9e2e9':  '#2b3743')};
        margin: 1vh 0;
    }
    @media screen and (max-width: 1024px) {
        justify-content: center;
        text-align: center;
    }
`

export const Button = styled.button`
    color: ${props=>(props.dark?'white':'black')};
    background-color: ${props=>(props.dark?'#2b3743':'white')};
    padding: 0.5rem 1.5rem;
    box-shadow: 0px 0px 1px rgba(43, 55, 67,0.5);
    margin: 5px 5px;
    border: none;
    border-radius: 4px;
    &:hover{
        cursor: pointer;
        background-color: ${props=>(props.dark?'#485058':'#f1f1f1')};
    }    
`

export const Neighbour = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 4vh 0 4vh;
    color: ${props=>(props.dark?'white':'black')};
    & > button{
        padding: 0.5rem;
    }

    
`




