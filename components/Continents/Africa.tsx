import Link from 'next/link';
import React, { useContext, useEffect, useState } from 'react';

import { Dark } from '../helper/Dark';
import { Flag } from './style';

const Africa = () => {


    const {darkMode, setDarkMode}:any = useContext(Dark);
    
    const [africa, setAfrice]:any = useState([]);
    const [errorHandler, setErrorHandler] = useState('');

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/region/Africa`)
        .then(res => res.json())
        .then(data =>{setAfrice(data.slice(0,10))})
        .catch(()=>setErrorHandler('Could not Connet to The Server'));
    },[])

    let AfricaCard;
    if(errorHandler) AfricaCard = errorHandler;
    else {AfricaCard = africa.map(country =>{ 
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

    if(africa.length == 10){
    AfricaCard.push(<Link href='./continents/Africa'><h3>more...</h3></Link>)}

    return AfricaCard;
};

export default Africa;