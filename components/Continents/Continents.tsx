import React, { useContext } from "react";
import { ActivePage } from "../helper/ActivePage";
import { Dark } from "../helper/Dark";
import { AllContinentsContainer, ContinentContainer } from "./style";
import Continent from "./Continent";

const Continents = () => {
  const { active, setActive }: any = useContext(ActivePage);
  setActive("Continents");
  const { darkMode, setDarkMode }: any = useContext(Dark);

  return (
    <AllContinentsContainer dark={darkMode}>
      <h2>Africa</h2>
      <ContinentContainer dark={darkMode}>
        <Continent continent="Africa" />
      </ContinentContainer>

      <h2>America</h2>
      <ContinentContainer dark={darkMode}>
        <Continent continent="America" />
      </ContinentContainer>

      <h2>Asia</h2>
      <ContinentContainer dark={darkMode}>
        <Continent continent="Asia" />
      </ContinentContainer>

      <h2>Europe</h2>
      <ContinentContainer dark={darkMode}>
        <Continent continent="Europe" />
      </ContinentContainer>

      <h2>Oceania</h2>
      <ContinentContainer dark={darkMode}>
        <Continent continent="Oceania" />
      </ContinentContainer>
    </AllContinentsContainer>
  );
};

export default Continents;
