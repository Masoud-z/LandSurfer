import React, { useContext } from 'react';
import { Dark } from '../helper/Dark';
import { Flex, FlexColumn, Grid } from './styles';

const CountryDetailCard = (props:any) => {
    const {darkMode, setDarkMode}:any = useContext(Dark);
    const nativeName = Object.values(props.native)[0];
    const currencies = Object.values(props.currencies).map(currency=>currency.name);
    const languages = Object.values(props.languages);
    console.log(languages);
    
    
    //Object.values(props.native)[0]
    
    return (
        <Grid>
          <img src={props.img} alt={props.name}/> 
            <FlexColumn dark={darkMode}>
                <h1>{props.name}</h1>
                <Flex dark={darkMode}>
                    <FlexColumn dark={darkMode}>
                        <p>
                            <b>Native Name: </b>
                            {nativeName.common}
                        </p>

                        <p>
                            <b>Population: </b>
                            {props.population}
                        </p>

                        <p>
                            <b>Region: </b>
                            {props.region}
                        </p>

                        <p>
                            <b>Sub Region: </b>
                            {props.subregion}
                        </p>

                        <p>
                            <b>Capital: </b>
                            {props.capital}
                        </p>
                    </FlexColumn>

                    <FlexColumn dark={darkMode}>
                        <p>
                            <b>Top Level Domain: </b>
                            {props.tld}
                        </p>

                        <p>
                            <b>Currencies: </b>
                            {currencies}
                        </p>

                        <p>
                            <b>Languages: </b>
                            {languages.toString()}
                        </p>
                    </FlexColumn>
                </Flex>
            </FlexColumn>
        </Grid>
    );
};

export default CountryDetailCard;