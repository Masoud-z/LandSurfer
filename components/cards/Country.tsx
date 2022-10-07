import { useRouter } from 'next/router';
import React, { useContext } from 'react';
import { Dark } from '../helper/Dark';
import {CountryCard, CountryCardDitail} from './styles';


const Country = (props:any) => {
    const {darkMode, setDarkMode}:any = useContext(Dark);
    const router = useRouter();
    function ShowDetailHandler(){
        router.push('/'+props.cca)
    }
    return (
        <CountryCard dark={darkMode} onClick={ShowDetailHandler}>
            <img src={props.img}  alt={props.name} />

            <CountryCardDitail dark={darkMode} >
                <h2>{props.name}</h2>
                <p><b>Population: </b>{props.population}</p>
                <p><b>Region: </b>{props.continent}</p>
                <p><b>Capital: </b>{props.capital}</p>
            </CountryCardDitail>
        </CountryCard>
    );
};

export default Country;