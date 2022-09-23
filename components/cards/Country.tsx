import React, { useContext } from 'react';
import { Dark } from '../helper/Dark';
import {Card, CardDitail} from './styles';


const Country = (props:any) => {
    const {darkMode, setDarkMode}:any = useContext(Dark);
    return (
        <Card dark={darkMode}>
            <img src={props.img}  alt={props.name} />

            <CardDitail dark={darkMode}>
                <h2>{props.name}</h2>
                <p><b>Population: </b>{props.population}</p>
                <p><b>Region: </b>{props.continent}</p>
                <p><b>Capital: </b>{props.capital}</p>
            </CardDitail>
        </Card>
    );
};

export default Country;