import React, { useState } from 'react';
import { CountryContext } from '../helper/CountryContext';
import { RegionContext } from '../helper/RegionContext';
import ArengBar from './ArengBar'
import Countries from './Countries';


const Home = () => {
    const [region, setRegion] = useState('');
    const [searchedCountry,setSearchedCountry] = useState('');

    return (
        <RegionContext.Provider value={{region, setRegion}}>
            <CountryContext.Provider value={{searchedCountry,setSearchedCountry}}>
                <ArengBar />
                <Countries />
            </CountryContext.Provider>
        </RegionContext.Provider>
    );
};

export default Home;