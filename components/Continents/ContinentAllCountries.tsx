import React, { useContext, useEffect, useState } from 'react';
import Country from '../cards/Country';
import { Dark } from '../helper/Dark';
import { Error, Grid, Loading, ScrollUpContainer } from './style';
import {RiLoader2Fill} from 'react-icons/ri'
import { ActivePage } from '../helper/ActivePage';

const ContinentAllCountries = (props:any) => {
    const [countries, setCountries] = useState([]);
    const [showLoading, setshowLoading] = useState(true);
    const [errorHandler, setErrorHandler] = useState('');
    const [scrollUp, setScrollUp] = useState(false);

    const {darkMode, setDarkMode}:any = useContext(Dark);
    const {active, setActive}:any = useContext(ActivePage);
    setActive('');

    useEffect(()=>{
        fetch(`https://restcountries.com/v3.1/region/${props.region}`)
            .then(res => res.json())
            .then(data =>{data.status ? setErrorHandler('Continent not Found')
                : setCountries(data), setErrorHandler('');})
            .catch(()=>setErrorHandler('Could not Connect to the Server'));
    },[])

    const CountriesCard= countries.map((country:any) =>{ 
        return(  
           <Country
             key={country.name.common} 
             img={country.flags.png}
             name={country.name.common}
             population={country.population.toLocaleString()}
             continent={country.continents[0]}
             capital={country.capital}
             cca={country.cca3} /> 
             
        )
    });

    useEffect(() => {
		window.addEventListener("scroll", scrollBehavior);
		return () => {
			window.removeEventListener("scroll", scrollBehavior);
		};
	}, []);

    function scrollBehavior(){
        if(window.scrollY > window.innerHeight*0.5){
            setScrollUp(true);
        } else {setScrollUp(false);} 
    }


    function goToTop(){
        window.scrollTo(0,0);
    }


    return (
        <>
            {countries.length == 0 && !errorHandler && <Loading dark={darkMode}>
                <RiLoader2Fill />
             </Loading>}
            { errorHandler && <Error dark={darkMode}>
                    {errorHandler}
                </Error>}
            <Grid>
               {CountriesCard}
            </Grid>
            <ScrollUpContainer 
                  dark={darkMode}
                  show={scrollUp}
                  onClick={goToTop}>
                    Scroll Up
            </ScrollUpContainer >
        </>
    );
};

export default ContinentAllCountries;