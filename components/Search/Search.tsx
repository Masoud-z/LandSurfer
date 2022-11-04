import React, { useContext, useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { RiLoader2Fill } from 'react-icons/ri';
import Country from '../cards/Country';
import { ActivePage } from '../helper/ActivePage';
import { Dark } from '../helper/Dark';
import { Loading, SearchBar, SearchBarContainer, SearchContainer, Error, Grid } from './style';

const Search = () => {

    const [searchedText, setsearchedText] = useState('');
    const [countries, setCountries]:any = useState([]);
    const [errorHandler, setErrorHandler]:any = useState('');

    const {darkMode, setDarkMode}:any = useContext(Dark);
    const {active, setActive}:any = useContext(ActivePage);
    
    setActive('Search')

    useEffect(()=>{
        
        fetch(`https://restcountries.com/v3.1/name/${searchedText}`)
        .then(res => res.json())
        .then(data =>{ 
            if(data.status) {
                setErrorHandler('Country not Found');setCountries([]);}
            else {
                setCountries(data); setErrorHandler('');
            }
        })
        .catch(()=>setErrorHandler('Could not Connect to The Server'));  
    },[searchedText])

    let CountriesCard:any =[];

    if(countries.length > 0 && searchedText.length > 0){
        CountriesCard= countries.map((country:any) =>{ 
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
}

    function onChangeCountry(event:any){
        setsearchedText(event.target.value); 
    }
    
    return (
        <SearchContainer>
            <SearchBarContainer dark={darkMode}>
                <BiSearchAlt2 />
                <SearchBar
                 dark={darkMode}
                 onChange={onChangeCountry}
                 placeholder= 'Search for a country...'
                 value={searchedText} />
            </SearchBarContainer>

            {countries.length == 0 && !errorHandler && searchedText.length > 0 &&
             <Loading dark={darkMode}>
                <RiLoader2Fill />
            </Loading>}
            
            {errorHandler && <Error dark={darkMode}>
                   {errorHandler}
                </Error>}
            <Grid>
               {CountriesCard}
            </Grid>
        </SearchContainer>
    );
};

export default Search;