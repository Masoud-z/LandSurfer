import Image from 'next/image';
import { stringify } from 'querystring';
import React, { useContext } from 'react';
import { Dark } from '../helper/Dark';
import { Btn, CTA, Description, Img, LandingPageContainer, Title } from './style';
import Globe from '../../public/assets/globe.png';
import Link from 'next/link';



const LandingPage = () => {

    const {darkMode, setDarkMode}:any = useContext(Dark);

    
    return (
        <LandingPageContainer>   
            <Description>
                <Title  dark={darkMode}>
                    Get <br /> All Information <br /> You need <br /> About Countries
                </Title>
                <CTA>
                    <Link href='/allCountries'>
                    <Btn dark={darkMode}>
                        All Countries
                    </Btn>
                    </Link>
                    <Btn dark={darkMode}>Search</Btn>
                </CTA>            
            </Description>
               <Img src='./globe.png' alt="globe" width="70%"/>
        </LandingPageContainer>
    );
};

export default LandingPage;