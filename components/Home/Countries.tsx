import React, {useState, useEffect, useContext} from 'react';
import {  Grid, Loading } from './styles';
import Country from '../cards/Country';
import {RiLoader2Fill} from 'react-icons/ri'
import { RegionContext } from '../helper/RegionContext';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [showLoading, setshowLoading] = useState(true);
    const {region, setRegion}:any = useContext(RegionContext);

    useEffect(()=>{
        if(region != ""){
            setCountries([]);
            fetch(`https://restcountries.com/v3.1/region/${region}`)
            .then(res => res.json())
            .then(data =>{setCountries(data);});
        }
        else{
            fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data =>{setCountries(data);});
        }
        console.log(region); 
    }, [region])
    
    
    const CountriesCard= countries.map(country =>{ 
        return(  
           <Country
             key={country.name.common} 
             img={country.flags.png}
             name={country.name.common}
             population={country.population.toLocaleString()}
             continent={country.continents[0]}
             capital={country.capital} /> 
        )
    });

    return (
        <>
            {countries.length == 0 && <Loading dark>
                <RiLoader2Fill />
            </Loading>}
            <Grid>
               {CountriesCard}
            </Grid>
        </>
    );
};

export default Countries;