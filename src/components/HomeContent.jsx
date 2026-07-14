import { Droplets, Wind, Thermometer, Gauge } from "lucide-react";
import { motion } from "framer-motion";

function HomeContent() {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -100 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-center mt-10 flex flex-col gap-3 md:gap-7"
      >
        <h1 className="text-2xl text-blue-700 font-bold md:text-5xl">
          Welcome to Sky Cast
        </h1>
        <p className="text-gray-600 md:text-2xl">
          Get real-time weather updates from cities around the world.
        </p>
        <div className="flex flex-col items-center gap-3 text-gray-700 bg-white/30 backdrop-blur-lg border border-white/30 rounded-2xl shadow-lg hover:shadow-xl transition p-5 w-[90%] md:w-[500px] lg:w-[550px] mx-auto">
          <div className="flex items-center gap-1 md:text-2xl">
            <Thermometer className="w-5 h-5 md:w-8 md:h-8" />
            <p>Temprature</p>
          </div>
          <div className="flex items-center gap-1 md:text-2xl">
            <Droplets className="w-5 h-5 md:w-8 md:h-8" />
            <p>Humidity</p>
          </div>
          <div className="flex items-center gap-1 md:text-2xl">
            <Wind className="w-5 h-5 md:w-8 md:h-8" />
            <p>Wind Speed</p>
          </div>
          <div className="flex items-center gap-1 md:text-2xl">
            <Gauge className="w-5 h-5 md:w-8 md:h-8" />
            <p>Feels Like</p>
          </div>
        </div>
        <h1 className="text-gray-500 italic md:text-2xl">
          Search above to begin.
        </h1>
      </motion.div>
    </>
  );
}

export default HomeContent;
