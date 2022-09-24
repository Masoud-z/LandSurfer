import React, { useContext } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Dark } from '../helper/Dark';
import { Flex, BackButton } from './styles';

const NavBar = () => {
    const {darkMode, setDarkMode}:any = useContext(Dark);
    return (
        <Flex dark={darkMode}>
            <BackButton dark={darkMode}> <BsArrowLeft /> <span>Back </span></BackButton>
        </Flex>
    );
};

export default NavBar;