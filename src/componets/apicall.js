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
  const [weeklyForecast, setWeeklyForecast] = useState([]);

  const wheat = {
    minMaxTemperature: [10, 27],
    idealTemperature: [18, 24],
    idealHumidity: [60, 70],
  };

  useEffect(() => {
    // My personal API Key is: 0cc0d8a57951e6604c481c7a11931b89
    const API_KEY = "0cc0d8a57951e6604c481c7a11931b89";
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
        // Weekly forecast
        setWeeklyForecast(response.data.list.slice(0, 7));
      })
      .catch((error) => {
        console.log(error);
      });
  }, [LAT, LON]);

  useEffect(() => {
    // My personal API Key is: 0cc0d8a57951e6604c481c7a11931b89
    const API_KEY = "0cc0d8a57951e6604c481c7a11931b89";
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?lat=${LAT}&lon=${LON}&appid=${API_KEY}&units=metric`
      )
      .then((response) => {
        // Weekly forecast
        setWeeklyForecast(response.data.list.slice(0, 100));
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
    <div className="lex flex-col space-y-2 bg-slate-200">
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
          <p className="font-bold">Ideal</p>
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
          <p className="font-bold">Ideal</p>
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
      <p>Weekly forecast:</p>
      {weeklyForecast.map((day, index) => {
        const date = new Date(day.dt * 1000);
        const weekday = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ][date.getDay()];
        return (
          <div className="w-64 p-4 m-auto bg-white shadow-lg rounded-2xl dark:bg-gray-800">
            <div className="flex flex-col items-center justify-center">
              <p className="">Date: {day.dt_txt}</p>
              <p className="text-xl font-semibold mb-2">{weekday}</p>
              <p className="text-3xl font-bold mb-2">{day.main.temp}°C</p>
              <div className="flex items-center mb-2">
                <img
                  className="w-8 h-8 mr-2"
                  src={`https://openweathermap.org/img/wn/${day.weather[0].icon}.png`}
                  alt="Weather icon"
                />
                <p className="text-lg font-medium">
                  {day.weather[0].description}
                </p>
              </div>
              <div className="flex items-center justify-between w-full">
                <p className="text-sm font-medium">
                  Humidity: {day.main.humidity}%
                </p>
                <p className="text-sm font-medium">
                  Wind: {day.wind.speed} m/s
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ApiCall;
