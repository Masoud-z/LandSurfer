import React, { useContext, useEffect, useState } from 'react';
import { ActivePage } from '../helper/ActivePage';
import { Dark } from '../helper/Dark';
import Africa from './Africa';
import America from './America';
import Asia from './Asia';
import Europe from './Europe';
import Oceania from './Oceania';
import { AllContinentsContainer, ContinentContainer } from './style';

const Continents = () => {

    const {active, setActive}:any = useContext(ActivePage);
    setActive('Continents');
    const {darkMode, setDarkMode}:any = useContext(Dark);
    
 

    

    

    return (
        <AllContinentsContainer dark={darkMode}>
            <h2>Africa</h2>
            <ContinentContainer dark={darkMode}>
                <Africa />
            </ContinentContainer>

            <h2>America</h2>
            <ContinentContainer dark={darkMode}>
                <America />
            </ContinentContainer>

            <h2>Asia</h2>
            <ContinentContainer dark={darkMode}>
                <Asia/>
            </ContinentContainer>

            <h2>Europe</h2>
            <ContinentContainer dark={darkMode}>
                <Europe/>
            </ContinentContainer>

            <h2>Oceania</h2>
            <ContinentContainer dark={darkMode}>
                <Oceania/>
            </ContinentContainer>

        </AllContinentsContainer>
    );
};

export default Continents;