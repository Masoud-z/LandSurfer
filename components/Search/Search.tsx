import React, { useContext, useEffect, useState } from 'react';
import { BiSearchAlt2 } from 'react-icons/bi';
import { RiLoader2Fill } from 'react-icons/ri';
import Country from '../cards/Country';
import { ActivePage } from '../helper/ActivePage';
import { Dark } from '../helper/Dark';
import { Loading, SearchBar, SearchBarContainer, SearchContainer, Error, Grid } from './style';

const Search = () => {

	let lastReturnedSearchCount = useRef(0);
	const searchDebounceTimerId = useRef<any>();
	useEffect(() => {

		return new Promise((resolve, reject) => {
			clearTimeout(searchDebounceTimerId.current);
			searchDebounceTimerId.current = setTimeout(() => {
				fetch(`https://restcountries.com/v3.1/name/${searchText}`)

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