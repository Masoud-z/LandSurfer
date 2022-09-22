import React from 'react';
import {Filter, Flex, SearchBar, SearchContainer} from './styles';
import {BiSearchAlt2} from 'react-icons/bi'

const ArengBar = () => {
    return (
        <Flex dark>
            <SearchContainer dark>
                <BiSearchAlt2 />
                <SearchBar dark placeholder= 'Search for a countru...' />
            </SearchContainer>

            <Filter dark>
                <option>Filter by Region</option>
                <option>Africa</option>
                <option>North America</option>
                <option>South America</option>
                <option>Asia</option>
                <option>Europe</option>
                <option>Oceania</option>
            </Filter>
        </Flex>
    );
};

export default ArengBar;