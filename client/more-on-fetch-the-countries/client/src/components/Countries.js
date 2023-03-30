import React from "react";
import FavButton from "./FavButton";

function Countries({ countries, onLearn, actionInput}) {
  return (
    <div>
      <input type="text" onChange={actionInput}></input>
      {countries.map((country) => (
        <>
          <br></br>
          <br></br>
          <div key={country.name.common}>
            <h2 className="countryName">{country.name.common}</h2>
            <FavButton countryChosen={country}/>
          </div>
          <button onClick={() => onLearn(country)}>Learn More</button>
          <br></br>
        </>
      ))}
    </div>
  );
}

export default Countries;