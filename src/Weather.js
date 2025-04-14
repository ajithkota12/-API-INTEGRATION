import React, { useState } from "react";
import moment from "moment";

const API_URL = "https://api.openweathermap.org/data/2.5/weather";
const API_KEY = ""; // Use your own API key

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState(null);

  const fetchWeather = async () => {
    if (!city) {
      setError("Please enter a city name.");
      return;
    }

    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );
      const data = await response.json();

      if (response.ok) {
        setWeather(data);
        setError(null);
      } else {
        setWeather(null);
        setError("City not found. Please try again.");
      }
    } catch (err) {
      setError("Error fetching weather data. Please try again later.");
    }
  };

  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={fetchWeather}>Get Weather</button>

      {error && <p className="error">{error}</p>}

      {weather && (
        <div className="weather-info">
          <h2>{weather.name}</h2>
          <p>{moment().format("MMMM Do YYYY, h:mm:ss a")}</p>
          <p>Temperature: {weather.main.temp}°C</p>
          <p>Description: {weather.weather[0].description}</p>
          <p>Wind Speed: {weather.wind.speed} m/s</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
