import React, { useState } from "react";

const FavButton = ({ countryChosen}) => {
    const [pressed, setPressed] = useState('+')

  const postWhenPressed = async () => {
    setPressed('-')
    if(pressed === '+') {
        const reponse = await fetch("http://localhost:9001/favourites", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(countryChosen),
    })
    }
  };

  return (<button onClick={postWhenPressed}>{pressed}</button>);
};

export default FavButton;
