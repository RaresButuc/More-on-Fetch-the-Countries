// import React from "react";

// function Countries({ countries, onLearn, actionInput, addToFavouritesButton}) {
//   return (
//     <div>
//       <input type="text" onChange={actionInput}></input>
//       {countries.map((country) => (
//         <>
//           <br></br>
//           <br></br>
//           <div key={country.name.common}>
//             <h2 className="countryName">{country.name.common}</h2>
//             <button className="plus" onClick = {addToFavouritesButton}>+</button>
//           </div>
//           <button onClick={() => onLearn(country)}>Learn More</button>
//           <br></br>
//         </>
//       ))}
//     </div>
//   );
// }

// export default Countries;

import React from "react";

function Countries({ countries, onLearn, actionInput, addToFavouritesButton}) {
  return (
    <div>
      <input type="text" onChange={actionInput}></input>
      {countries.map((country) => (
        <>
          <br></br>
          <br></br>
          <div key={country.name.common}>
            <h2 className="countryName">{country.name.common}</h2>
            <button className="plus" onClick = {addToFavouritesButton}>+</button>
          </div>
          <button onClick={() => onLearn(country)}>Learn More</button>
          <br></br>
        </>
      ))}
    </div>
  );
}

export default Countries;