/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

export const Card = styled.div`
    padding: 0;
    display: flex;
    background-color: ${props => (props.dark? '#2b3743':'white')};
    color: ${props => (props.dark?'white':  '#2b3743')};
    & > p{
        color: ${props => (props.dark?'#d9e2e9':  '#2b3743')}
    }
`