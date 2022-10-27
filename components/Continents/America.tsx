import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';

import { Dark } from '../helper/Dark';
import { Flag } from './style';

const America = () => {

    const {darkMode, setDarkMode}:any = useContext(Dark);
    
    const [america, setAmerica]:any = useState([]);
    const [errorHandler, setErrorHandler] = useState('');

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/region/America`)
        .then(res => res.json())
        .then(data =>{setAmerica(data.slice(0,10)); setErrorHandler('')})
        .catch(()=>setErrorHandler('Could not Connect to the Server'));
    },[])

    let AmericaCard;
    if(errorHandler) AmericaCard = errorHandler;
    else {AmericaCard= america.map(country =>{ 
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

    if(america.length == 10){
    AmericaCard.push(<Link href='./continents/America'><h3>more...</h3></Link>)}

    return AmericaCard;
};

export default America;