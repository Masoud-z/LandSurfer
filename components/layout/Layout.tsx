/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import styled from '@emotion/styled';

import React from 'react';
import { Header, MainContainer, Page } from './styles';
import {BsFillMoonFill} from 'react-icons/bs'

const Layout = (props:any) => {

    return (
        
        <Page dark>
            <Header dark>
                <h3>Wher in the world?</h3>
                <div>
                    <BsFillMoonFill />
                    Dark Mode
                </div>
            </Header>
            <MainContainer>
            <main>{props.children}</main>
            </MainContainer>
        </Page>
    );
};

export default Layout;