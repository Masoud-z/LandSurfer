import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';

import { Dark } from '../helper/Dark';
import { Flag, LoadingContinent } from './style';

const Asia = () => {

    const {darkMode, setDarkMode}:any = useContext(Dark);
    
    const [asia, setAsia]:any = useState([]);
    const [errorHandler, setErrorHandler] = useState('');

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/region/Asia`)
        .then(res => res.json())
        .then(data =>{setAsia(data.slice(0,10)); setErrorHandler('')})
        .catch(()=>setErrorHandler('Could not Connect to The Server'));
    },[])

    let AsiaCard
    if(errorHandler) AsiaCard = errorHandler;
    else if(asia.length == 0 ) {AsiaCard = <LoadingContinent dark={darkMode}>Loading...</LoadingContinent>}
    else {AsiaCard = asia.map(country =>{ 
        return(
            <>
            <Link
             href={`./${country.cca3}`} 
             key={country.name} >
                <Flag
                 src={country.flags.png} 
                 key={country.flags.png}/>
            </Link>
            </>
        )
    });}

    if(asia.length == 10){
    AsiaCard.push(<Link href='./continents/Asia'><h3>more...</h3></Link>)}

    return AsiaCard;
};

export default Asia;