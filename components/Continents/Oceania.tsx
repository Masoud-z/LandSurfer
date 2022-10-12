import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';

import { Dark } from '../helper/Dark';
import { Flag } from './style';

const Oceania = () => {

    const {darkMode, setDarkMode}:any = useContext(Dark);
    
    const [oceania, setOceania]:any = useState([]);

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/region/Oceania`)
        .then(res => res.json())
        .then(data =>{setOceania(data.slice(0,10))});
    },[])

    const OceaniaCard= oceania.map(country =>{ 
        return(
            <Link
             href={`./${country.cca3}`} 
             key={country.name} >
                <Flag
                 src={country.flags.png} 
                 key={country.flags.png}/>
            </Link>
        )
    });

    if(oceania.length == 10){
        OceaniaCard.push(<Link href='./continents/Oceania'><h3>more...</h3></Link>)}

    return OceaniaCard;
};

export default Oceania;