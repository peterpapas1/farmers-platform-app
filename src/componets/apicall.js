import React, { useState, useEffect } from "react";
import axios from "axios";

function ApiCall({ LAT, LON }) {
  const [weatherData, setWeatherData] = useState({});
  const [temperature, setTemperature] = useState(0);
  const [humidity, setHumidity] = useState(0);
  const [windSpeed, setWindSpeed] = useState(0);
  const [cityName, setCityName] = useState("");
  const [maxTemp, setMaxTemp] = useState(0);
  const [minTemp, setMinTemp] = useState(0);
  const [wheatMinMaxTemperature, setWheatMinMaxTemperature] = useState(false);
  const [wheatIdealTemperature, setWheatIdealTemperature] = useState(false);
  const [wheatIdealHumidity, setWheatIdealHumidity] = useState(false);

  const wheat = {
    minMaxTemperature: [10, 27],
    idealTemperature: [18, 24],
    idealHumidity: [60, 70],
  };

  useEffect(() => {
    // My personal API Key is: 0cc0d8a57951e6604c481c7a11931b89
    const API_KEY = "0cc0d8a57951e6604c481c7a11931b89";
    // Coordinates for Melbourne
    // const LAT = -37.8136;
    // const LON = 144.9631;
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        setWeatherData(response.data);
        setTemperature(response.data.main.temp);
        setHumidity(response.data.main.humidity);
        setWindSpeed(response.data.wind.speed);
        setCityName(response.data.name);
        setMaxTemp(response.data.main.temp_max);
        setMinTemp(response.data.main.temp_min);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [LAT, LON]);

  useEffect(() => {
    if (
      temperature >= wheat.minMaxTemperature[0] &&
      temperature <= wheat.minMaxTemperature[1]
    ) {
      setWheatMinMaxTemperature(true);
    } else {
      setWheatMinMaxTemperature(false);
    }
  }, [temperature]);

  useEffect(() => {
    if (
      temperature >= wheat.idealTemperature[0] &&
      temperature <= wheat.idealTemperature[1]
    ) {
      setWheatIdealTemperature(true);
    } else {
      setWheatIdealTemperature(false);
    }
  }, [temperature]);

  useEffect(() => {
    if (
      humidity >= wheat.idealHumidity[0] &&
      humidity <= wheat.idealHumidity[1]
    ) {
      setWheatIdealHumidity(true);
    } else {
      setWheatIdealHumidity(false);
    }
  }, [humidity]);

  return (
    <div className="lex flex-col space-y-2">
      <p>City: {cityName}</p>
      <p>The temperature is: {temperature}°C</p>
      <p>The humidity is: {humidity}%</p>
      <p>The wind speed is: {windSpeed} m/s</p>
      <p>Max temperature: {maxTemp}°C</p>
      <p>Min temperature: {minTemp}°C</p>
      {wheatMinMaxTemperature ? (
        <></>
      ) : (
        <div
          className="bg-red-200 border-red-600 text-red-600 border-l-4 p-4"
          role="alert"
        >
          <p class="font-bold">Alert</p>
          <p>Temperature is outside the safety zone.</p>
          <p>Current temperature is: {temperature}°C</p>
          <p>
            Safety zone temperature is between: {wheat.minMaxTemperature[0]}°C -{" "}
            {wheat.minMaxTemperature[1]}°C
          </p>
        </div>
      )}
      {wheatIdealTemperature ? (
        <div
          className="bg-green-200 border-green-600 text-green-600 border-l-4 p-4"
          role="alert"
        >
          <p className="font-bold">Temperature</p>
          <p>Temperature is ideal for wheat growth.</p>
        </div>
      ) : (
        <div
          className="bg-yellow-200 border-yellow-600 text-yellow-600 border-l-4 p-4"
          role="alert"
        >
          <p class="font-bold">Warning</p>
          <p>Temperature is not Ideal for Wheat growth</p>
          <p>Current temperature is: {temperature}°C</p>
          <p>
            Ideal temperature is between: {wheat.idealTemperature[0]}°C -{" "}
            {wheat.idealTemperature[1]}°C
          </p>
        </div>
      )}

      {wheatIdealHumidity ? (
        <div
          className="bg-green-200 border-green-600 text-green-600 border-l-4 p-4"
          role="alert"
        >
          <p className="font-bold">Humidity</p>
          <p>Humidity is ideal for wheat growth.</p>
        </div>
      ) : (
        <div
          className="bg-yellow-200 border-yellow-600 text-yellow-600 border-l-4 p-4"
          role="alert"
        >
          <p class="font-bold">Warning</p>
          <p>Humidity is not Ideal for Wheat growth.</p>
          <p>Current humidity is: {humidity}%</p>
          <p>
            Ideal humidity is between: {wheat.idealHumidity[0]}% -{" "}
            {wheat.idealHumidity[1]}%
          </p>
        </div>
      )}
    </div>
  );
}

export default ApiCall;
