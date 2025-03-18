import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const API_KEY = "dd1bbbfdb6961837baf8765ffecae1cd"; // Remplacez par votre clé API
  const city = "Bujumbura"; // Changez avec la ville de votre choix

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric&lang=fr`
        );
        setWeather(response.data);
      } catch (error) {
        console.error(
          "Erreur lors de la récupération des données météo :",
          error
        );
      }
    };
    fetchWeather();
  }, []);

  return (
    <div className="p-4 bg-blue-500 text-white rounded-lg shadow-lg w-80 text-center">
      {weather ? (
        <div>
          <h2 className="text-xl font-bold">{weather.name}</h2>
          <p className="text-lg">{weather.weather[0].description}</p>
          <p className="text-2xl font-bold">{weather.main.temp}°C</p>
        </div>
      ) : (
        <p>
          Chargement <span></span>
        </p>
      )}
    </div>
  );
};

export default Weather;
