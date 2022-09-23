import React, { useState } from 'react';
import { RegionContext } from '../helper/RegionContext';
import ArengBar from './ArengBar'
import Countries from './Countries';


const Home = () => {
    const [region, setRegion] = useState('');
    return (
        <RegionContext.Provider value={{region, setRegion}}>
            <ArengBar />
            <Countries />
        </RegionContext.Provider>
    );
};

export default Home;