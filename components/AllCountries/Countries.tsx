import React, {useState, useEffect, useContext} from 'react';
import {  Error, Grid, Loading } from './styles';
import Country from '../cards/Country';
import {RiLoader2Fill} from 'react-icons/ri'
import { RegionContext } from '../helper/RegionContext';
import { CountryContext } from '../helper/CountryContext';
import { Dark } from '../helper/Dark';

const Countries = () => {

    const [countries, setCountries] = useState([]);
    const [showLoading, setshowLoading] = useState(true);
    const [errorHandler, setErrorHandler] = useState('');
    
    const {region, setRegion}:any = useContext(RegionContext);
    const {searchedCountry,setSearchedCountry}:any = useContext(CountryContext);
    const {darkMode, setDarkMode}:any = useContext(Dark);

    
    useEffect(()=>{
        if(region != ""){
            setCountries([]);
            fetch(`https://restcountries.com/v3.1/region/${region}`)
            .then(res => res.json())
            .then(data =>{data.status ? setErrorHandler('Country not Found')
                : setCountries(data), setErrorHandler('');});
                console.log("region");
                
        }
        if(searchedCountry != ""){
            setCountries([]);
            setRegion("");
            fetch(`https://restcountries.com/v3.1/name/${searchedCountry}`)
            .then(res => res.json())
            .then(data =>{ 
                if(data.status) {
                    setErrorHandler('Country not Found');setCountries([]);}
                else {
                    setCountries(data); setErrorHandler('');
                }
         });
         console.log("country");
        }
        if(searchedCountry === "" && region === ""){
            setCountries([]);
            setErrorHandler('')
            fetch(`https://restcountries.com/v3.1/all`)
            .then(res => res.json())
            .then(data =>{ setCountries(data); })
            .catch(()=>setErrorHandler('Could not Connect to the Server'))
            console.log("all"); 
        } 
    }, [region, searchedCountry])
    
    console.log(countries);
    
    const CountriesCard= countries.map(country =>{ 
        return(  
           <Country
             key={country.name.common} 
             img={country.flags.png}
             name={country.name.common}
             population={country.population.toLocaleString()}
             continent={country.continents[0]}
             capital={country.capital}
             cca={country.cca3} /> 
             
        )
    });

    

    return (
        <>
            {countries.length == 0 && !errorHandler && <Loading dark={darkMode}>
                <RiLoader2Fill />
            </Loading>}
            {errorHandler && <Error dark={darkMode}>
                    {errorHandler}
                </Error>}
            <Grid>
               {CountriesCard}
            </Grid>
        </>
    );
};

export default Countries;