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
    justify-content: center;
    gap: 5%;
    overflow: visible;
    padding: 2rem;
    @media screen and (max-width: 1000px) {
        grid-template-columns: 80%;
        text-align: center;
        } 
`

export const Description = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
`

export const Title = styled.h1`
    font-family: 'Old Standard TT', serif;
    font-weight: 700;
    color: ${props =>(props.dark?'#fff':'#000')};
    font-size: 3.5rem;
    text-shadow: 10px 10px 4px ${props =>(props.dark ? '#000' : '#ccc')};
    @media screen and (max-width: 600px){
        font-size: 2rem;
    }
`

export const CTA = styled.div`
    padding-left: 1rem ;
    display: flex;
    justify-content: center;
    gap: 5vh;
    animation: ${appear} linear 2s;
` 

export const Img = styled.img`
    margin: auto;
    @media screen and (max-width: 1000px){
        grid-area: 1/1/1/1;
    }
    @media screen and (max-width: 600px){
        display: none;
    }
`

export const Btn = styled.button`
     padding: 1.5rem 2rem;
     background-color: transparent;
     border: none;
     color: ${props =>(props.dark?'#fff':'#000')};
     border-radius: 8px;
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


