/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useContext, useEffect, useState } from "react";
import { Dark } from "../helper/Dark";
import { Button, Flex, FlexColumn, Grid } from "./styles";
import Link from "next/link";
import Image from "next/image";

const CountryDetailCard = (props: any) => {
  const { darkMode, setDarkMode }: any = useContext(Dark);
  const nativeName: any = props.native ? Object.values(props.native)[0] : "";
  const currencies = props.currencies
    ? Object.values(props.currencies).map((currency: any) => currency.name)
    : [];
  const languages = props.languages ? Object.values(props.languages) : "";
  const [borderCountries, setBorderCountries] = useState<any[]>([]);
  const [update, setUpdate]: any = useState(false);

  useEffect(() => {
    if (props.borders) {
      const totalCountofAllCountries = props.borders.length;
      let allCountries: any[] = [];
      props.borders.map(async (countryCode: any) => {
        const resp = await fetch(
          `https://restcountries.com/v3.1/alpha/${countryCode}`
        );
        const countryJson = await resp.json();
        allCountries.push(countryJson[0]);
        if (allCountries.length === totalCountofAllCountries) {
          setBorderCountries(allCountries);
          setUpdate((prev: boolean) => !prev);
        }
      });
    }
  }, [props]);

  const borderCountriesBotton = borderCountries.map((borderCountry) => {
    return (
      <Link key={borderCountry.cca3} href={`./${borderCountry.cca3}`}>
        <Button key={borderCountry.name.common} dark={darkMode}>
          {borderCountry.name.common}
        </Button>
      </Link>
    );
  });

  return (
    <Grid>
      <Image src={props.img} alt={props.name} width="100%" height="100%" />

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

        <Flex
          dark={darkMode}
          css={css`
            margin-top: 0px;
          `}
        >
          <p>
            <b>Border Countries: </b>
            {borderCountriesBotton}
          </p>
        </Flex>
      </FlexColumn>
    </Grid>
  );
};

export default CountryDetailCard;
