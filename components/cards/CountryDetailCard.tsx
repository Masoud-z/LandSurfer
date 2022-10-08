/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import React, { useContext, useEffect, useState } from 'react';
import { Dark } from '../helper/Dark';
import { Button, Flex, FlexColumn, Grid, Loading, Neighbour } from './styles';
import {RiLoader2Fill} from 'react-icons/ri'
import Link from 'next/link';
import { useRouter } from 'next/router';

const CountryDetailCard = (props:any) => {

    const {darkMode, setDarkMode}:any = useContext(Dark);
    const nativeName = Object.values(props.native)[0];
    const currencies = Object.values(props.currencies).map(currency=>currency.name);
    const languages = Object.values(props.languages);
    const [borderCountries,setBorderCountries] = useState<any[]>([]);

    const router = useRouter();




    useEffect(()=>{
        const totalCountofAllCountries = props.borders.length
        let allCountries:any[] = []
        props.borders.map(async countryCode=>{
            const resp = await fetch(`https://restcountries.com/v3.1/alpha/${countryCode}`)
            const countryJson = await resp.json()
            allCountries.push(countryJson[0])
            if(allCountries.length === totalCountofAllCountries){
                setBorderCountries(allCountries)
            }
        })
    },[])



      const  borderCountriesBotton = borderCountries.map(borderCountry=>{
            console.log(borderCountry);
            return(
                <Link 
                 key={borderCountry.cca3}
                 href={`./${borderCountry.cca3}`}>
                    <Button
                     key={borderCountry.name.common} 
                     dark={darkMode}>
                        {borderCountry.name.common}
                    </Button>
                </Link>
            )
        });
        

    
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

                <Flex dark={darkMode} css={css`margin-top:0px;`}>
                    <p><b>Border Countries: </b>{borderCountriesBotton}</p>
                </Flex>
            </FlexColumn>
        </Grid>
    );
};

export default CountryDetailCard;