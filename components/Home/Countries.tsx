import React, {useState, useEffect} from 'react';
import {  Grid, Loading } from './styles';
import Country from '../cards/Country';
import {RiLoader2Fill} from 'react-icons/ri'

const Countries = () => {

    const [countries, setCountries] = useState([]);
    useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data =>{setCountries(data);});
    }, [])
   
    console.log(countries);
    
    const CountriesCard = countries.map(country =>{
        console.log(country.capital);
        
        return(  
           <Country
             key={country.name.common} 
             img={country.flags.png}
             name={country.name.common}
             population={country.population.toLocaleString()}
             continent={country.continents[0]}
             capital={country.capital} /> 
        )
    })

    return (
        <>
            <Loading dark>
                <RiLoader2Fill />
            </Loading>
            {/* <Grid>
               {CountriesCard}
            </Grid> */}
        </>
    );
};

export default Countries;