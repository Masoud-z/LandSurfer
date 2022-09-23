/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import React from 'react';
import { DarkModeContainer, Header, MainContainer, Page } from './styles';
import {BsFillMoonFill} from 'react-icons/bs'

const Layout = (props:any) => {

    return (
        
        <Page dark>
            <Header dark>
                <h3>Wher in the world?</h3>
                <DarkModeContainer>
                    <BsFillMoonFill />
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