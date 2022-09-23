import React, {useContext} from 'react';
import {Filter, Flex, SearchBar, SearchContainer} from './styles';
import {BiSearchAlt2} from 'react-icons/bi'
import { RegionContext } from '../helper/RegionContext';

const ArengBar = () => {

    const {region, setRegion}:any = useContext(RegionContext);
    

    function onChangeRegion(event:any){
        setRegion(event.target.value);       
    }

   

    return (
        <Flex dark>
            <SearchContainer dark>
                <BiSearchAlt2 />
                <SearchBar
                 dark
                 placeholder= 'Search for a countru...' />
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