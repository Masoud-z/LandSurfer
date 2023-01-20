import Link from "next/link";
import React, { useContext, useEffect, useState } from "react";

import { Dark } from "../helper/Dark";
import { Flag, LoadingContinent } from "./style";

const Continent = (props:any) => {
  const { darkMode, setDarkMode }: any = useContext(Dark);

  const [countries, setCountries]: any = useState([]);
  const [errorHandler, setErrorHandler] = useState("");
  
  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/region/${props.continent}`)
      .then((res) => res.json())
      .then((data) => {
        setCountries(data.slice(0, 10));
        setErrorHandler("");
      })
      .catch(() => setErrorHandler("Could not Connect to The Server"));
  }, []);

  let countriesOfContinent;
  if (errorHandler) countriesOfContinent = errorHandler;
  else if (countries.length == 0) {
    countriesOfContinent = (
      <LoadingContinent dark={darkMode}>Loading...</LoadingContinent>
    );
  } else {
    countriesOfContinent = countries.map((country: any) => {
      return (
        <>
          {errorHandler && <h2>{errorHandler}</h2>}
          <Link href={`./${country.cca3}`} key={country.name}>
            <Flag src={country.flags.png} key={country.flags.png} />
          </Link>
        </>
      );
    });
  }

  if (countries.length == 10) {
    countriesOfContinent.push(
      <Link href={`./continents/${props.continent}`}>
        <h3>more...</h3>
      </Link>
    );
  }

  return countriesOfContinent;
};

export default Continent;
