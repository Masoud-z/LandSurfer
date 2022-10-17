/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import React, { useContext, useState } from 'react';
import { DarkModeContainer, Header, MainContainer, NavBar, Options, OptionsHolder, Page, Toggler } from './styles';
import {BsFillMoonFill,BsMoon} from 'react-icons/bs'
import {AiOutlineMenu} from 'react-icons/ai'
import { Dark } from '../helper/Dark';
import Link from 'next/link';
import { ActivePage } from '../helper/ActivePage';

const Layout = (props:any) => {

    const {darkMode, setDarkMode}:any = useContext(Dark);
    const {active, setActive}:any = useContext(ActivePage);
    
    const [showList, setShowList]:any= useState(false); 

    function toggleHandler(){
        setShowList(prev =>!prev)
    }

    return (
        
        <Page  dark={darkMode}>
            <Header  dark={darkMode}>
                <Link href='/'>
                    <h3> LandSurfer</h3>
                </Link>

            

                <NavBar
                  onMouseEnter={toggleHandler}
                  onMouseLeave={toggleHandler} >
                    <Toggler
                     dark={darkMode} 
                     show={showList}>
                        <AiOutlineMenu />
                    </Toggler>
                    
                    <OptionsHolder
                     show={showList}
                     dark={darkMode}>
                    <Link href='/allCountries'>
                        <Options 
                         dark={darkMode}
                         activePage={active=='All'}>
                            All Countries
                        </Options>
                    </Link>


                    <Link href='/continents'>
                        <Options 
                         dark={darkMode}
                         activePage={active=='Continents'} >
                            Continents
                        </Options>
                    </Link>

                    <Link href="/search">
                        <Options  
                         dark={darkMode}
                         activePage={active=='Search'} >
                            Search
                        </Options>
                    </Link>
                    </OptionsHolder>
                </NavBar>

                <DarkModeContainer dark={darkMode} onClick={()=>setDarkMode((perv:boolean)=>!perv)}>
                   {darkMode ? <BsFillMoonFill /> :<BsMoon />}
                    <p>Dark Mode</p>
                </DarkModeContainer>
            </Header>
            <MainContainer>
            <main>{props.children}</main>
            </MainContainer>
        </Page>
    );
};

export default Layout;