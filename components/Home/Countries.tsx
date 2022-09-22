import React from 'react';
import { Grid } from './styles';

let flag:string;
function getCountries(){
    
    fetch(`https://restcountries.com/v3.1/all`)
    .then(res => res.json())
    .then(data => {flag = data[0].flags.png ; console.log(data[0].flags.png);
    })
}

getCountries();

const Countries = () => {
    return (
        <Grid>
           
        </Grid>
    );
};

export default Countries;