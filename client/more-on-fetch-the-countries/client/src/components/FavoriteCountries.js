import React, { useState, useEffect } from "react";

const ShowFavoriteCountries = () => {
  const [favourites, setFavourites] = useState(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://127.0.0.1:9001/favourites");
        const data = await response.json();
        setFavourites(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTodos();
  }, []);
  

  return (
    <div>
      {favourites&&favourites.map((country, i) => 
        <div key={i}>
          <h3>{country.name.common}</h3>
          <h4>Capital: {country.capital}</h4>
      <h4>Independent: {country.independent.toString()}</h4>
      <h4>Area:{country.area} km2</h4>
      <h4>Continent: {country.continents}</h4>
      <h4>Region: {country.region}</h4>
      <h4>Subregion: {country.subregion}</h4>
      <h4>Languages: {Object.values(country.languages).join(", ")}</h4>
      <h4>Population: {country.population}</h4>
      <h4>
        Flag: <br></br>
        <img src={country.flags.png} alt="country.flag.png" />
      </h4>
        </div>
      )}
    </div>
  );
};

export default ShowFavoriteCountries;
