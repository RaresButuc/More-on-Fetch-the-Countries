import React, { useState } from "react";

const showFavoriteCountries = () => {
  const [favourites, setFavourites] = useState([]);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const response = await fetch("http://localhost:9001/favourites");
        const data = await response.json();
        setFavourites(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchTodos();
  }, [favourites]);

  return favourites.map((country) => {
    <div>
      <h4>{country.name.common}</h4>
      <h6>Capital: {country.capital}</h6>
      <h6>Independent: {country.independent.toString()}</h6>
      <h6>
        Currencies: {Object.keys(country.currencies)}{" "}
        {country.currencies[Object.keys(country.currencies)].symbol}
      </h6>
      <h6>Area:{country.area} km2</h6>
      <h6>Continent: {country.continents}</h6>
      <h6>Region: {country.region}</h6>
      <h6>Subregion: {country.subregion}</h6>
      <h6>Languages: {Object.values(country.languages).join(", ")}</h6>
      <h6>Population: {country.population}</h6>
      <h6>
        Flag: <br></br>
        <img src={country.flags.png} alt="country.flag.png" />
      </h6>
      <button onClick={onBack}>Back</button>
    </div>;
  });
};

export default showFavoriteCountries;