/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import React, { useContext } from 'react';
import { DarkModeContainer, Header, MainContainer, Page } from './styles';
import {BsFillMoonFill,BsMoon} from 'react-icons/bs'
import { Dark } from '../helper/Dark';

const Layout = (props:any) => {

    const {darkMode, setDarkMode}:any = useContext(Dark);

    return (
        
        <Page  dark={darkMode}>
            <Header  dark={darkMode}>
                <h3>Wher in the world?</h3>
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