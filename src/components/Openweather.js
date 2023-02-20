import ReactWeather, { useOpenWeather } from "react-open-weather";

const Openweather = () => {
  const { data, isLoading, errorMessage } = useOpenWeather({
    // key: `${process.env.OPEN_WEATHER_API_KEY}`,
    key: "0cc0d8a57951e6604c481c7a11931b89",
    lat: "-37.813629",
    lon: "144.963058",
    lang: "en",
    unit: "metric", // values are (metric, standard, imperial)
  });

  const openWeatherStyles = {
    maxWidth: "20vw",
    marginRight: "auto",
    marginLeft: "auto",
  };
  return (
    <ReactWeather
      isLoading={isLoading}
      errorMessage={errorMessage}
      data={data}
      lang="en"
      locationLabel="Melbourne"
      unitsLabels={{ temperature: "C", windSpeed: "Km/h" }}
      style={openWeatherStyles}
      showForecast
    />
  );
};

export default Openweather;
