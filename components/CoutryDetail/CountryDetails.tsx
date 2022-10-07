import React, { useContext } from 'react';
import { Dark } from '../helper/Dark';
import NavBar from './NavBar';
import Details from './Details';

const CountryDetails = (props:any) => {
    const {darkMode, setDarkMode}:any = useContext(Dark);
    return (
        <>
            <NavBar />
            <Details cca={props.cca}/>
        </>
    );
};

export default CountryDetails;