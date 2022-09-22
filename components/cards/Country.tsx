import React from 'react';
import {Card, CardDitail} from './styles';


const Country = (props:any) => {
    return (
        <Card dark>
            <img src={props.img}  alt={props.name} />

            <CardDitail>
                <h2>{props.name}</h2>
                <p><b>Population: </b>{props.population}</p>
                <p><b>Region: </b>{props.continent}</p>
                <p><b>Capital: </b>{props.capital}</p>
            </CardDitail>
        </Card>
    );
};

export default Country;