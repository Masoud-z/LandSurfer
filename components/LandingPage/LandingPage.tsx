import React, { useContext } from "react";
import { Dark } from "../helper/Dark";
import {
  Btn,
  CTA,
  Description,
  Img,
  LandingPageContainer,
  Title,
} from "./style";
import Link from "next/link";
import { ActivePage } from "../helper/ActivePage";
import Image from "next/image";

const LandingPage = () => {
  const { darkMode, setDarkMode }: any = useContext(Dark);
  const { active, setActive }: any = useContext(ActivePage);
  setActive("");

  return (
    <LandingPageContainer>
      <Description>
        <Title dark={darkMode}>
          Get All Information You need About Countries
        </Title>
        <CTA>
          <Link href="/allCountries">
            <Btn dark={darkMode}>All Countries</Btn>
          </Link>

          <Link href="/search">
            <Btn dark={darkMode}>Search</Btn>
          </Link>
        </CTA>
      </Description>
      <Image src="./globe.png" alt="globe" width="70%" height="100%" />
    </LandingPageContainer>
  );
};

export default LandingPage;
