import React, {useContext} from 'react';
import {Filter, Flex, SearchBar, SearchContainer} from './styles';
import {BiSearchAlt2} from 'react-icons/bi'
import { RegionContext } from '../helper/RegionContext';
import { CountryContext } from '../helper/CountryContext';
import { Dark } from '../helper/Dark';

const ArengBar = () => {

    const {region, setRegion}:any = useContext(RegionContext);
    const {searchedCountry,setSearchedCountry}:any = useContext(CountryContext);
    const {darkMode, setDarkMode}:any = useContext(Dark);
    

    function onChangeRegion(event:any){
        setRegion(event.target.value);       
    }

    function onChangeCountry(event:any){
        setSearchedCountry(event.target.value);      
    }

    return (
        <Flex dark={darkMode}>
            <SearchContainer dark={darkMode}>
                <BiSearchAlt2 />
                <SearchBar
                 dark={darkMode}
                 onChange={onChangeCountry}
                 placeholder= 'Search for a countru...'
                 value={searchedCountry} />
            </SearchContainer>

            <Filter
             dark={darkMode}
             onChange={onChangeRegion}
             value={region}>
                <option value="">All Countries</option>
                <option value="Africa">Africa</option>
                <option value="North America">North America</option>
                <option value="South America">South America</option>
                <option value="Asia">Asia</option>
                <option value="Europe">Europe</option>
                <option value="Oceania">Oceania</option>
            </Filter>
        </Flex>
    );
};

export default ArengBar;