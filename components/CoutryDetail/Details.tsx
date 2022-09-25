import { count } from 'console';
import React, { useContext, useEffect, useState } from 'react';
import CountryDetailCard from '../cards/CountryDetailCard';
import { Dark } from '../helper/Dark';
import { Flex, FlexColumn, Grid } from './styles';

const Details = () => {
    const [country, setCountry] = useState('') ;


    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/alpha/BEL`)
        .then(res => res.json())
        .then(data =>{ setCountry(data[0]); });
    },[])
     
  
    return (
        <>
        { country &&
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
        }
        </>
    );
};

export default Details;