import React, { useContext, useEffect, useState } from 'react';
import { CountryContext } from '../helper/CountryContext';
import { Dark } from '../helper/Dark';
import { RegionContext } from '../helper/RegionContext';
import ArengBar from './ArengBar'
import Countries from './Countries';
import { ScrollUpContainer } from './styles';


const AllCountries = () => {
    const [region, setRegion] = useState('');
    const [searchedCountry,setSearchedCountry] = useState('');
    const {darkMode, setDarkMode}:any = useContext(Dark);

    const [scrollUp, setScrollUp] = useState(false);

    useEffect(() => {
		window.addEventListener("scroll", scrollBehavior);
		return () => {
			window.removeEventListener("scroll", scrollBehavior);
		};
	}, []);

    function scrollBehavior(){
        console.log(window.scrollY);
        if(window.scrollY > window.innerHeight*0.5){
            setScrollUp(true);
        } else {setScrollUp(false);} 
    }

    function goToTop(){
        window.scrollTo(0,0);
    }

    return (
        <RegionContext.Provider value={{region, setRegion}}>
            <CountryContext.Provider value={{searchedCountry,setSearchedCountry}}>
                <ArengBar />
                <Countries />
                <ScrollUpContainer 
                  dark={darkMode}
                  show={scrollUp}
                  onClick={goToTop}>
                    Scroll Up
                </ScrollUpContainer >
            </CountryContext.Provider>
        </RegionContext.Provider>
    );
};

export default AllCountries;