/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Card = styled.div`
    padding: 0;
    display: flex;
    flex-direction: column;
    background-color: ${props => (props.dark? '#2b3743':'white')};
    color: ${props => (props.dark?'white':  '#2b3743')};
    border: none;
    border-radius: 2px;
    box-shadow: 1px 1px 1px;

    & > p{
        & > b{
            color: ${props => (props.dark?'white':  'black')};
        }
        color: ${props => (props.dark?'#d9e2e9':  '#2b3743')}
    }
    
`

export const CardDitail = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0.5vh 0.5vw 1.5vh;
    & > h2{
        margin-bottom: 0.5vh;
    }
`