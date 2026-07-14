import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import axios from "axios";

function Navbar({ setWeatherData }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [city, setCity] = useState("");
  function handlecity(evt) {
    setCity(evt.target.value);
  }
  function searchWeather() {
    if (city.trim() === "") {
      setError("Please enter a city name");
      return;
    }

    const formattedCity = city.trim().replace(/\s+/g, " ");

    setLoading(true);
    setError("");

    const API_KEY = "57ec36bc1c566aa50d33f9df33ee1099";
    var weather = axios(
      `https://api.openweathermap.org/data/2.5/weather?q=${formattedCity}&appid=${API_KEY}&units=metric`,
    );
    weather
      .then((success) => {
        setTimeout(() => {
          setWeatherData(success.data);
          setLoading(false);
          setCity("");
        }, 3000);
      })
      .catch((error) => {
        setLoading(false);
        setWeatherData(null);

        if (error.response?.status === 404) {
          setError("City not found");
        } else {
          setError("Something went wrong");
        }
      });
  }
  return (
    <>
      <div className="text-center mt-5 flex flex-col gap-5 items-center md:mt-20">
        <h1 className="text-xl text-gray-700 md:text-3xl">
          Search your city for real-time weather
        </h1>
        <div className="flex items-center gap-3 w-[80%]">
          <input
            placeholder="Enter you city name"
            type="text"
            value={city}
            onChange={handlecity}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                searchWeather();
              }
            }}
            className="flex-1 p-3 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-sky-400"
          />
          <button
            onClick={searchWeather}
            className="bg-blue-600 p-3 rounded-full hover:bg-blue-700 transition"
          >
            <MagnifyingGlassIcon className="h-6 w-6 text-white" />
          </button>
        </div>
        {loading && (
          <p className="mt-5 text-2xl text-sky-600 font-medium">
            Fetching weather data...
          </p>
        )}

        {error && <p className="mt-3 text-red-500 font-medium">{error}</p>}
      </div>
    </>
  );
}

export default Navbar;
