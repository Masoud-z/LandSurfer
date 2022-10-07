
import React, { useEffect, useState } from 'react';
import CountryDetailCard from '../cards/CountryDetailCard';


const Details = (props:any) => {
    const [country, setCountry] = useState('') ;

    console.log(props.cca);
    
    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/alpha/${props.cca}`)
        .then(res => res.json())
        .then(data =>{ setCountry(data[0]);
        });
    },[])
     
    console.log(country);
    
  
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