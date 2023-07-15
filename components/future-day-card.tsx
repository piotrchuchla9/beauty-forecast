import { useFutureWeather } from "@/hooks/weather";
import Image from "next/image";

interface FutureDayProps {
  city: string;
}

export default function FutureDay({ city }: FutureDayProps) {
  const { data } = useFutureWeather(city);
  console.log(data);
  const { location, forecast, current } = data || {};

  return (
    <div>
      {location && forecast && current && (
        <div className="bg-slate-700 bg-opacity-20 rounded-3xl p-4 text-center">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-2xl sm:text-lg 2xl:text-2xl">
            {forecast.forecastday.map((day) => (
              <div
                key={day.date}
                className="mb-4 border-2 rounded-lg border-slate-400 p-4"
              >
                <p className="font-semibold">{day.date}</p>
                <p className="h-16">{day.day.condition.text}</p>
                <div
                  className={`flex justify-center my-7 ${
                    day.day.condition.text === "Sunny"
                      ? "animate-spin"
                      : "animate-bounce"
                  }`}
                >
                  <Image
                    width={128}
                    height={128}
                    src={`https:${day.day.condition.icon}`}
                    alt="Weather Icon"
                  />
                </div>
                <div>
                  <p>Temp: {day.day.avgtemp_c}°C</p>
                </div>
                <div>
                  <p>Max: {day.day.maxtemp_c}°C</p>
                </div>
                <div>
                  <p>Min: {day.day.mintemp_c}°C</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
