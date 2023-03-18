import React from "react";

const CountryData = ({ country, onBack }) => {

  return (
    <div>
      <h2>{country.name.common}</h2>
        <h4>Capital: {country.capital}</h4>
        <h4>Independent: {country.independent.toString()}</h4>
        <h4>Currencies: {Object.keys(country.currencies)} {country.currencies[Object.keys(country.currencies)].symbol}</h4>
        <h4>Area:{country.area} km2</h4>
        <h4>Continent: {country.continents}</h4>
        <h4>Region: {country.region}</h4>
        <h4>Subregion: {country.subregion}</h4>
        <h4>Languages: {Object.values(country.languages).join(', ')}</h4>
        <h4>Population: {country.population}</h4>
        <h4>Flag: <br></br><img src={country.flags.png} alt="country.flag.png" /></h4>
        <button onClick={onBack}>Back</button>
    </div>
  );
};

export default CountryData;