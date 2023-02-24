import React, { useState, useEffect, useContext, useRef } from "react";
import { Error, Grid, Loading } from "./styles";
import Country from "../cards/Country";
import { RiLoader2Fill } from "react-icons/ri";
import { RegionContext } from "../helper/RegionContext";
import { CountryContext } from "../helper/CountryContext";
import { Dark } from "../helper/Dark";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [showLoading, setshowLoading] = useState(true);
  const [errorHandler, setErrorHandler] = useState("");

  const { region, setRegion }: any = useContext(RegionContext);
  const { searchedCountry, setSearchedCountry }: any =
    useContext(CountryContext);
  const { darkMode, setDarkMode }: any = useContext(Dark);

  let searchCount = useRef(0);
  let lastReturnedSearchCount = useRef(0);
  const searchDebounceTimerId = useRef<any>();
  useEffect(() => {
    if (region != "") {
      setCountries([]);
      fetch(`https://restcountries.com/v3.1/region/${region}`)
        .then((res) => res.json())
        .then((data) => {
          data.status
            ? setErrorHandler("Country not Found")
            : setCountries(data),
            setErrorHandler("");
        });
    }
    if (searchedCountry != "") {
      setCountries([]);
      setRegion("");
      searchCount.current++;
      fetchCountries(searchedCountry, searchCount.current)
        .then((data) => {
          if (data.searchCount > lastReturnedSearchCount.current) {
            lastReturnedSearchCount.current = data.searchCount;
            if (data.data.status) {
              setErrorHandler("Country not Found");
              setCountries([]);
            } else {
              setCountries(data.data);
              setErrorHandler("");
            }
          }
        })
        .catch((err) => {
          setErrorHandler("Could not Connect to The Server");
          setCountries([]);
        });
    }
    if (searchedCountry === "" && region === "") {
      setCountries([]);
      setErrorHandler("");
      fetch(`https://restcountries.com/v3.1/all`)
        .then((res) => res.json())
        .then((data) => {
          setCountries(data);
        })
        .catch(() => setErrorHandler("Could not Connect to the Server"));
    }
  }, [region, searchedCountry]);

  const fetchCountries = (
    searchText: string,
    searchCount: number
  ): Promise<{ searchCount: number; data: any }> => {
    return new Promise((resolve, reject) => {
      clearTimeout(searchDebounceTimerId.current);
      searchDebounceTimerId.current = setTimeout(() => {
        fetch(`https://restcountries.com/v3.1/name/${searchText}`)
          .then((res) => res.json())
          .then((data) => {
            resolve({ searchCount, data });
          })
          .catch(() => {
            reject();
          });
      }, 500);
    });
  };

  const CountriesCard = countries.map((country: any) => {
    return (
      <Country
        key={country.name.common}
        img={country.flags.png}
        name={country.name.common}
        population={country.population.toLocaleString()}
        continent={country.continents[0]}
        capital={country.capital}
        cca={country.cca3}
      />
    );
  });

  return (
    <>
      {countries.length == 0 && !errorHandler && (
        <Loading dark={darkMode}>
          <RiLoader2Fill />
        </Loading>
      )}
      {errorHandler && <Error dark={darkMode}>{errorHandler}</Error>}
      <Grid>{CountriesCard}</Grid>
    </>
  );
};

export default Countries;
