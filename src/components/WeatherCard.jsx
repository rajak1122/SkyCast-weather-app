import { Droplets, Wind, Thermometer, Gauge } from "lucide-react";

function WeatherCard({ weatherData }) {
  if (!weatherData) return null;

  const {
    main: { humidity, pressure, feels_like },
    wind: { speed },
  } = weatherData;
  return (
    <>
      <div className="mt-5 text-center bg-white/30 backdrop-blur-xl border border-white/40 rounded-3xl shadow-2xl w-[80%] mx-auto grid grid-cols-2 gap-6 p-6 md:gap-10 mb-5">
        <div>
          <div className="flex items-center justify-center gap-2 text-slate-500 md:text-2xl">
            <Droplets className="w-5 h-5 md:w-8 md:h-8" />
            <p>Humidity</p>
          </div>
          <p className="text-xl font-bold md:text-4xl">{humidity} %</p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-2 text-slate-500 md:text-2xl">
            <Wind className="w-5 h-5 md:w-8 md:h-8" />
            <p>Wind</p>
          </div>
          <p className="text-xl font-bold md:text-4xl">{speed} Km/h</p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-2 text-slate-500 md:text-2xl">
            <Gauge className="w-5 h-5 md:w-8 md:h-8" />
            <p>Pressure</p>
          </div>
          <p className="text-xl font-bold md:text-4xl">{pressure} hPa</p>
        </div>
        <div>
          <div className="flex items-center justify-center gap-2 text-slate-500 md:text-2xl">
            <Thermometer className="w-5 h-5 md:w-8 md:h-8" />
            <p>Feels Like</p>
          </div>
          <p className="text-xl font-bold md:text-4xl">{Math.round(feels_like)}°C</p>
        </div>
      </div>
    </>
  );
}

export default WeatherCard;
