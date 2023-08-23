import { useRouter } from "next/router";
import React, { useContext } from "react";
import { Dark } from "../helper/Dark";
import { CountryCard, CountryCardDetail, ImageContainer } from "./styles";
import Image from "next/image";

const Country = (props: any) => {
  const { darkMode, setDarkMode }: any = useContext(Dark);
  const router = useRouter();
  function ShowDetailHandler() {
    router.push("/" + props.cca);
  }
  return (
    <CountryCard dark={darkMode} onClick={ShowDetailHandler}>
      <Image
        loader={() => props.img}
        width="100%"
        height="150%"
        src={props.img}
        alt={props.name}
      />

      <CountryCardDetail dark={darkMode}>
        <h2>{props.name}</h2>
        <p>
          <b>Population: </b>
          {props.population}
        </p>
        <p>
          <b>Region: </b>
          {props.continent}
        </p>
        <p>
          <b>Capital: </b>
          {props.capital}
        </p>
      </CountryCardDetail>
    </CountryCard>
  );
};

export default Country;
