import Lottie from "lottie-react";
import clearAnimation from "../assets/animations/Weather Day - clear sky.json";
import rainyAnimation from "../assets/animations/rainy icon.json";
import cloudsAnimation from "../assets/animations/Weather Day - broken clouds.json";
import mistAnimation from "../assets/animations/Weather Day - mist.json";
import snowAnimation from "../assets/animations/Weather Day - snow.json";
import thunderstromAnimation from "../assets/animations/Weather Day - thunderstorm.json";
import sunnyAnimation from "../assets/animations/Weather-sunny.json";
import { MapPinIcon } from "@heroicons/react/24/outline";

function WeatherAnimation({ weatherData }) {
  if (!weatherData) {
    return null;
  }
  const { main, weather, name } = weatherData;

  const animations = {
    Clear: clearAnimation,
    Clouds: cloudsAnimation,
    Rain: rainyAnimation,
    Thunderstorm: thunderstromAnimation,
    Snow: snowAnimation,
    Mist: mistAnimation,
    Fog: mistAnimation,
    Haze: mistAnimation,
  };

  const currentAnimation = animations[weather[0].main] || sunnyAnimation;

  return (
    <>
      <div className=" flex justify-center w-48 h-48 mx-auto md:w-72 md:h-72">
        <Lottie
          className="hover:scale-105 transition duration-300"
          animationData={currentAnimation}
          loop={true}
        />
      </div>
      <div className="mt-4 text-xl text-center items-center flex flex-col justify-center gap-7 md:text-3xl">
        <h1 className="text-slate-800 md:text-5xl font-bold">
          {Math.round(main.temp)}°C
        </h1>
        <h1 className="text-slate-700 md:text-2xl font-semibold">
          {weather[0].main}
        </h1>
        <div className="flex items-center text-center">
          <MapPinIcon className="w-5 h-5 text-slate-500 md:w-8 md:h-6" />
          <h1 className="text-slate-500 md:text-lg">{name}</h1>
        </div>
      </div>
    </>
  );
}

export default WeatherAnimation;
