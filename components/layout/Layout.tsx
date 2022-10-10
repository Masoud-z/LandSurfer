/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import React, { useContext } from 'react';
import { DarkModeContainer, Header, MainContainer, NavBar, Options, Page } from './styles';
import {BsFillMoonFill,BsMoon} from 'react-icons/bs'
import { Dark } from '../helper/Dark';
import Link from 'next/link';
import { ActivePage } from '../helper/ActivePage';

const Layout = (props:any) => {

    const {darkMode, setDarkMode}:any = useContext(Dark);
    const {active, setActive}:any = useContext(ActivePage);

    return (
        
        <Page  dark={darkMode}>
            <Header  dark={darkMode}>
                <Link href='/'>
                    <h3> Wher in the world?</h3>
                </Link>

                <NavBar>
                    <Link href='./allCountries'>
                        <Options 
                         dark={darkMode}
                         activePage={active=='All'}>
                            All Countries
                        </Options>
                    </Link>

                    <Options 
                     dark={darkMode}
                     activePage={active=='Continents'} >
                        Continents
                    </Options>

                    <Options  
                     dark={darkMode}
                     activePage={active=='Search'} >
                        Search
                    </Options>
                </NavBar>

                <DarkModeContainer dark={darkMode} onClick={()=>setDarkMode((perv:boolean)=>!perv)}>
                   {darkMode ? <BsFillMoonFill /> :<BsMoon />}
                    Dark Mode
                </DarkModeContainer>
            </Header>
            <MainContainer>
            <main>{props.children}</main>
            </MainContainer>
        </Page>
    );
};

export default Layout;