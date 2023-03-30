import "./App.css";
import React, { useState, useEffect } from "react";
import Countries from "./components/Countries";
import CountryData from "./components/CountryData";
import ShowFavoriteCountries from "./components/FavoriteCountries";

function App() {
  const [data, setData] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);

  //Countries Fetch
  useEffect(() => {
    async function fetchData() {
      try {
        const info = await fetch("https://restcountries.com/v3.1/all");
        const countries = await info.json();
        setData(countries);
      } catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  function handleCountryDetails(country) {
    setSelectedCountry(country);
  }

  const handleBack = () => {
    setSelectedCountry(null);
  };

  const [searchedCountry, setsearchedCountry] = useState([...data]);

  const inputSearch = (e) => {
    const searched = e.target.value;
    if (searched.length > 0) {
      const results = [...data].filter((all) =>
        all.name.common.toLowerCase().includes(searched.toLowerCase())
      );
      setsearchedCountry(results);
    } else {
      setsearchedCountry([...data]);
    }
  };

  const asc = () => {
    let sorted = searchedCountry.sort((a, b) =>
      a.name.common > b.name.common ? 1 : -1
    );
    setsearchedCountry([...sorted]);
  };

  const desc = () => {
    let desSorted = searchedCountry.sort((a, b) =>
      b.name.common > a.name.common ? 1 : -1
    );
    setsearchedCountry([...desSorted]);
  };

  const [showFavs, setShowFavs] = useState(false);
  const [favButt, setFavButt] = useState("Show Favourite Countries");

  const showFavouritesButton = () => {
    if (showFavs === false) {
      setFavButt("Back");
      setShowFavs(true);
    } else {
      setFavButt("Show Favourite Countries");
      setShowFavs(false);
    }
  };

  return (
    <div className="App">
      {selectedCountry ? (
        <CountryData country={selectedCountry} onBack={handleBack} />
      ) : (
        <div>
          <button onClick={asc}>Asc Sort</button>
          <button onClick={desc}>Desc Sort</button>
          <button onClick={showFavouritesButton}>{favButt}</button>
          <br></br>
          {!showFavs ? (
            <Countries
              countries={searchedCountry}
              onLearn={handleCountryDetails}
              actionInput={inputSearch}
            />
          ) : (
            <ShowFavoriteCountries/>
          )}
        </div>
      )}
    </div>
  );
}

export default App;
