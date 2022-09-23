import React, {useContext} from 'react';
import {Filter, Flex, SearchBar, SearchContainer} from './styles';
import {BiSearchAlt2} from 'react-icons/bi'
import { RegionContext } from '../helper/RegionContext';
import { CountryContext } from '../helper/CountryContext';

const ArengBar = () => {

    const {region, setRegion}:any = useContext(RegionContext);
    const {searchedCountry,setSearchedCountry}:any = useContext(CountryContext);
    

    function onChangeRegion(event:any){
        setRegion(event.target.value);       
    }

    function onChangeCountry(event:any){
        setSearchedCountry(event.target.value);      
    }

    return (
        <Flex dark>
            <SearchContainer dark>
                <BiSearchAlt2 />
                <SearchBar
                 dark
                 onChange={onChangeCountry}
                 placeholder= 'Search for a countru...'
                 value={searchedCountry} />
            </SearchContainer>

            <Filter
             dark
             onChange={onChangeRegion}
             value={region}>
                <option value="">Filter by Region</option>
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