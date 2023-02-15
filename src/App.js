import "./App.css";
import ApiCall from "./componets/apicall";
import Openweather from "./componets/Openweather";
import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [city, setCity] = useState("melbourne");
  const [LAT, setLat] = useState(null);
  const [LON, setLon] = useState(null);

  const handleCityChange = (e) => {
    setCity(e.target.value);
  };

  useEffect(() => {
    const API_KEY = "0cc0d8a57951e6604c481c7a11931b89";

    if (city) {
      axios
        .get(
          `https://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${API_KEY}`
        )
        .then((response) => {
          if (response.data.length > 0) {
            setLat(response.data[0].lat);
            setLon(response.data[0].lon);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [city]);

  const openWeatherStyles = {
    maxWidth: "20vw",
    marginRight: "auto",
    marginLeft: "auto",
  };

  return (
    <div className="App">
      <header></header>
      <div style={openWeatherStyles}>
        <div className="m-5 border-2 border-indigo-200 hover:border-indigo-500">
          <label for="cityname">City Name: </label>
          <input
            className="m-2 border-2 border-indigo-200 hover:border-indigo-500"
            type="text"
            value={city}
            onChange={handleCityChange}
          />
          {LAT && LON ? <ApiCall LAT={LAT} LON={LON} /> : null}
        </div>
        <div className="grid place-items-center m-10 drop-shadow-xl rounded-lg">
          <Openweather />
        </div>
      </div>
    </div>
  );
}

export default App;
