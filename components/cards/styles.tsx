/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Card = styled.div`
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
    
`

export const CardDitail = styled.div`
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