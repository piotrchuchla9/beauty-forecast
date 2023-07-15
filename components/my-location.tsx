import {
  getCityFromCoordinates,
  getCurrentPosition,
} from "@/hooks/detect-location";
import { useWeather } from "@/hooks/weather";
import IconHumidity from "@/public/icons/humidity";
import IconPressure from "@/public/icons/pressure";
import IconSent from "@/public/icons/sent";
import IconWarning from "@/public/icons/warning";
import IconWind from "@/public/icons/wind";
import IconWindDirection from "@/public/icons/wind-direction";
import Image from "next/image";
import { useEffect, useState } from "react";
import FutureDay from "./future-day-card";
import Loader from "./loader";

export default function MyLocationWeather() {
  const [city, setCity] = useState<string>("");
  const { data, isLoading, isError } = useWeather(city);
  const { location, current } = data || {};
  const [inputCity, setInputCity] = useState<string>("");

  useEffect(() => {
    const fetchLocation = async () => {
      try {
        const position = await getCurrentPosition();
        const { latitude, longitude } = position.coords;
        const city = await getCityFromCoordinates(latitude, longitude);
        setCity(city);
      } catch (error) {
        setCity("London");
      }
    };

    fetchLocation();
  }, []);

  const handleInputKeyDown = (e: { key: string }) => {
    if (e.key === "Enter") {
      setCity(inputCity);
    }
  };

  return (
    <div>
      {isLoading && <Loader />}
      {isError && (
        <div className="flex justify-center items-center my-10">
          <div>
            <p className="text-center text-3xl">City not found...</p>
            <div className="flex justify-center items-center">
              <input
                onChange={(e) => setInputCity(e.target.value)}
                placeholder="City..."
                onKeyDown={handleInputKeyDown}
                className="bg-slate-700 bg-opacity-20 h-10 text-2xl p-2 cursor-default"
              />
              <button onClick={() => setCity(inputCity)} className="w-16">
                <IconSent />
              </button>
            </div>
            <div>
              <IconWarning />
            </div>
          </div>
        </div>
      )}
      {current && location && (
        <div>
          <div className="flex justify-center items-center sm:my-10 my-5">
            <input
              onChange={(e) => setInputCity(e.target.value)}
              onKeyDown={handleInputKeyDown}
              placeholder="City..."
              className="bg-slate-700 bg-opacity-20 h-10 text-2xl p-2 cursor-default w-40 sm:w-auto"
            />
            <button onClick={() => setCity(inputCity)}>
              <IconSent />
            </button>
          </div>
          <div className="sm:flex justify-evenly items-center w-full">
            <div className="mb-10 sm:mb-0 text-xl md:text-4xl">
              <p className="font-semibold text-center sm:text-left">{location.name}</p>
              <p className="text-center sm:text-left">{location.localtime}</p>
              <div className="mt-4 font-semibold md:text-2xl grid grid-cols-2 place-items-center sm:block">
                <div className="flex items-center">
                  <div className="w-10 h-10">
                    <IconWind />
                  </div>
                  <span className="ml-2">{current.wind_kph} km/h</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10">
                    <IconHumidity />
                  </div>
                  <span className="ml-2">{current.humidity}%</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10">
                    <IconPressure />
                  </div>
                  <span className="ml-2">{current.pressure_mb} hPa</span>
                </div>
                <div className="flex items-center">
                  <div className="w-10 h-10">
                    <IconWindDirection />
                  </div>
                  <span className="ml-2">{current.wind_dir}</span>
                </div>
              </div>
            </div>
            <div className="bg-slate-700 bg-opacity-20 rounded-3xl p-4 text-center">
              <p className="text-3xl">{current.condition.text}</p>
              <div className={`flex justify-center my-7 ${current.condition.text === "Sunny" ? "animate-spin" : "animate-bounce"}`}>
                <Image
                  width={128}
                  height={128}
                  src={`https:${current.condition.icon}`}
                  alt="Weather Icon"
                />
              </div>
              <p className="text-2xl">Real: {current.temp_c}°C</p>
              <p className="text-2xl">Feels like: {current.feelslike_c}°C</p>
            </div>
          </div>
          <p className="text-center mt-10 mb-4 text-3xl font-semibold">Next 14 days</p>
          <FutureDay city={city} />
        </div>
      )}
    </div>
  );
}
