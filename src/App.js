import './App.css'

import React, { useState } from "react";
import Country from "./Country.js";
import { countryList } from "./countryList.js";

export default function App() {
  const [country, setCountry] = useState("");
  const countries = countryList;

  // Choose a random index, then retrieve the country based on its index.
  const chooseCountry = (countries) => {
    const randomIndex = Math.floor(Math.random() * countries.length);
    setCountry(countries[randomIndex]);
  };

  return (
    <div id="container">
      <Country country={country} />
      <button onClick={() => chooseCountry(countries)}>Change country</button>
    </div>
  );
}