import Link from 'next/link';
import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { BsArrowLeft } from 'react-icons/bs';
import { Dark } from '../helper/Dark';
import { Flex, Button } from './styles';

const NavBar = () => {

    const {darkMode, setDarkMode}:any = useContext(Dark);
    

    return (
        <Flex dark={darkMode}>
            <Link href='/'>
                <Button dark={darkMode}> <BsArrowLeft /> <span>Back </span></Button>
            </Link>
        </Flex>
    );
};

export default NavBar;