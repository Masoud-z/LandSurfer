import React, {useState, useEffect} from 'react';
import { Grid } from './styles';
import Country from '../cards/Country';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    useEffect(()=>{
    fetch(`https://restcountries.com/v3.1/all`)
        .then(res => res.json())
        .then(data =>{setCountries(data); console.log(data[0]);
        });
    }, [])
   
    console.log(countries);
    
    const CountriesCard = countries.map(country =>{
        return(
            <Country
             key={country} 
             img={country.flags.png}
             name={country.name.common}
             population={country.population}
             continent={country.continents[0]}
             capital={country.capitals} />
        )
    })

    return (
        <Grid>
           {CountriesCard}
        </Grid>
    );
};

export default Countries;