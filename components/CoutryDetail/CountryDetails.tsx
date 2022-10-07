import React, { useContext } from 'react';
import { Dark } from '../helper/Dark';
import NavBar from './NavBar';
import Details from './Details';

const CountryDetails = () => {
    const {darkMode, setDarkMode}:any = useContext(Dark);
    return (
        <>
            <NavBar />
            <Details />
        </>
    );
};

export default CountryDetails;