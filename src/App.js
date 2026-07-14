import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import WeatherAnimation from "./components/WeatherAnimation";
import WeatherCard from "./components/WeatherCard";
import HomeContent from "./components/HomeContent";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function App() {
  const [weatherData, setWeatherData] = useState(null);
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Header />

        <main className="flex-1">
          <Navbar setWeatherData={setWeatherData} />

          <AnimatePresence mode="wait">
            {weatherData ? (
              <motion.div
                key="weather"
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 100 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                <WeatherAnimation weatherData={weatherData} />
                <WeatherCard weatherData={weatherData} />
              </motion.div>
            ) : (
              <HomeContent key="home" />
            )}
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default App;
