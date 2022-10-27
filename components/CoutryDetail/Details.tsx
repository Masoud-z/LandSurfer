
import React, { useContext, useEffect, useState } from 'react';
import CountryDetailCard from '../cards/CountryDetailCard';
import { Dark } from '../helper/Dark';
import { Loading } from './styles';
import {RiLoader2Fill} from 'react-icons/ri'


const Details = (props:any) => {
    const [country, setCountry] = useState('') ;
    const [errorHandler, setErrorHandler] = useState('');

    const {darkMode, setDarkMode}:any = useContext(Dark);
    

    console.log(props.cca);
    
    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/alpha/${props.cca}`)
        .then(res => res.json())
        .then(data =>{ setCountry(data[0]);console.log(data[0]); setErrorHandler('')})
        .catch(()=>setErrorHandler('Could not Connect to the Server'));
    },[])
     
    console.log(country);
    
  
    return (
        <>
        { country ?
            <CountryDetailCard 
              img={country.flags.png}
              name={country.name.common}
              native={country.name.nativeName}
              population={country.population.toLocaleString()}
              region={country.region}
              subregion={country.subregion}
              capital={country.capital[0]}
              tld={country.tld[0]}
              currencies={country.currencies}
              languages={country.languages}
              borders={country.borders}
            />
         : <Loading dark={darkMode}><RiLoader2Fill/></Loading>}
        
        {errorHandler && <h2>{errorHandler}</h2>}
        </>
    );
};

export default Details;