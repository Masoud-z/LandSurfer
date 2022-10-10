/** @jsxImportSource @emotion/react */
import { css, keyframes} from '@emotion/react';
import styled from '@emotion/styled';


const appear = keyframes`
    0%{opacity:0;}
    100%{opacity: 1;}
`

export const LandingPageContainer = styled.div`
    width: 90vw;
    height: 70vh;
    margin-top: 4vh;
    display: grid;
    grid-template-columns: 47% 48%;
    gap: 5%;
    overflow: visible;
    padding: 2rem;
`

export const Description = styled.div`
    display: flex;
    flex-direction: column;
`

export const Title = styled.h1`
    font-family: 'Old Standard TT', serif;
    font-weight: 700;
    color: ${props =>(props.dark?'#fff':'#000')};
    font-size: 3.5rem;
    text-shadow: 10px 10px 4px ${props =>(props.dark ? '#000' : '#ccc')};
    margin: auto;
`

export const CTA = styled.div`
    padding-left: 3.5rem ;
    display: flex;
    gap: 5vh;
    animation: ${appear} linear 3s;
` 

export const Img = styled.img`
    margin: auto;
`

export const Btn = styled.button`
     padding: 1.5rem 2rem;
     background-color: transparent;
     border: none;
     color: ${props =>(props.dark?'#fff':'#000')};
     border-radius: 5px;
     font-weight: bold;
     font-size: 1.2rem;
     transition: box-shadow 2s linear;;
     background: linear-gradient(${props =>(props.dark?'#fff':'#000')} 0 0) no-repeat calc(200% - var(--p, 0%))
     100% / 200% var(--p, 0.08em);
     transition: 0.3s var(--t, 0s),
     background-position 0.3s calc(0.3s - var(--t, 0s));
    
    &:hover{
        cursor: pointer;
        --p: 100%;
        --t: 0.3s;
        color: ${props =>(props.dark?'#000':'#fff')};
    }
`


