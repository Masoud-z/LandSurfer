import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';

import { Dark } from '../helper/Dark';
import { Flag } from './style';

const Europe = () => {

    const {darkMode, setDarkMode}:any = useContext(Dark);
    
    const [europe, setEurope]:any = useState([]);
    const [errorHandler, setErrorHandler] = useState('');

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/region/Europe`)
        .then(res => res.json())
        .then(data =>{setEurope(data.slice(0,10)); setErrorHandler('')})
        .catch(()=>setErrorHandler('Could not Connect to The Server'));
    },[])

    let EuropeCard;
    if(errorHandler) EuropeCard = errorHandler;
    else{EuropeCard = europe.map(country =>{ 
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

    if(europe.length == 10){
        EuropeCard.push(<Link href='./continents/Europe'><h3>more...</h3></Link>)}

    return EuropeCard;
};

export default Europe;