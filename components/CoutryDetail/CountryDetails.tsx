import React, { useContext } from 'react';
import { Dark } from '../helper/Dark';
import Details from './Details';
import { ActivePage } from '../helper/ActivePage';

const CountryDetails = (props:any) => {
    const {darkMode, setDarkMode}:any = useContext(Dark);
    const {active, setActive}:any = useContext(ActivePage);
    setActive('');
    return (
        <>
            <Details cca={props.cca}/>
        </>
    );
};

export default CountryDetails;