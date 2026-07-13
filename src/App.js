import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import WeatherAnimation from "./components/WeatherAnimation";
import WeatherCard from "./components/WeatherCard";
import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1">
          <Navbar setWeatherData={setWeatherData} />

          {weatherData && (
            <>
              <WeatherAnimation weatherData={weatherData} />
              <WeatherCard weatherData={weatherData} />
            </>
          )}
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
