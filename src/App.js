import "./App.css";
import ApiCall from "./components/apicall";
import React, { useState, useEffect } from "react";
import axios from "axios";
import Slider from "@mui/material/Slider";
import Header from "./components/Header";
import DropDownMenu from "./components/DropDownMenu";

function App() {
  const [city, setCity] = useState("melbourne");
  const [LAT, setLat] = useState(null);
  const [LON, setLon] = useState(null);
  const [SliderMaxTempValue, setSliderMaxTempValue] = useState(27);
  const [SliderMinTempValue, setSliderMinTempValue] = useState(10);
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleResize = () => setWidth(window.innerWidth);

  const handleSliderMaxTempValueChange = (event) => {
    setSliderMaxTempValue(parseInt(event.target.value));
  };

  const handleSliderMinTempValueChange = (event) => {
    setSliderMinTempValue(parseInt(event.target.value));
  };

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
    <div className="App bg-gradient-to-r from-cyan-500 to-blue-500">
      {width > 768 ? (
        <Header />
      ) : (
        <DropDownMenu
          label="Menu"
          items={[
            {
              label: "Home",
              link: "#",
            },
            {
              label: "Weather",
              link: "#",
            },
            {
              label: "Manuals",
              link: "#",
            },
            {
              label: "Blog",
              link: "#",
            },
          ]}
        />
      )}
      <div className="bg-white m-auto sm:max-w-xs md:max-w-sm drop-shadow-xl rounded-lg">
        <div className="m-5 border-2 border-indigo-200 hover:border-indigo-500">
          <label
            htmlFor="cityname"
            className="block font-medium text-gray-700 mb-2"
          >
            City Name:
          </label>
          <input
            id="cityname"
            className={`block w-full px-4 py-2 border rounded-md bg-white text-gray-900 ${
              city.length === 0
                ? "border-red-500 focus:border-red-500 focus:ring-red-500"
                : "border-gray-300 focus:border-purple-500 focus:ring-purple-500"
            } focus:outline-none focus:ring-2 transition duration-300 ease-in-out`}
            placeholder="Name of the city"
            type="text"
            value={city}
            onChange={handleCityChange}
            required
          />
          <p>Maximum Temperature: {SliderMaxTempValue}°C</p>
          {/* <input
            type="range"
            min="-100"
            max="100"
            // value={value}
            onChange={handleSliderMaxTempValueChange}
          /> */}
          <Slider
            getAriaLabel={() => "Temperature range"}
            onChange={handleSliderMaxTempValueChange}
            valueLabelDisplay="auto"
            defaultValue={27}
            // getAriaValueText={SliderValue}
            min={-100}
            max={100}
          />
          <p>Minimum Temperature: {SliderMinTempValue}°C</p>
          <Slider
            getAriaLabel={() => "Temperature range"}
            onChange={handleSliderMinTempValueChange}
            valueLabelDisplay="auto"
            defaultValue={10}
            // getAriaValueText={SliderValue}
            min={-100}
            max={100}
          />

          {LAT && LON ? (
            <ApiCall
              LAT={LAT}
              LON={LON}
              SliderMaxTempValue={SliderMaxTempValue}
              SliderMinTempValue={SliderMinTempValue}
            />
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default App;
