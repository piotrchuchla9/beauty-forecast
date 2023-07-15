import { FutureWeatherData, WeatherData } from "@/utils/types";
import { UseQueryResult, useQuery } from "react-query";
import { client } from "./client";

async function getWeather(city: string): Promise<WeatherData | null> {
    if (city === "") {
        return null;
    }

    return client(`http://api.weatherapi.com/v1/current.json?key=${process.env.WEATHER_API_KEY}&q=${city}&aqi=no`);
}

export function useWeather(city: string): UseQueryResult<WeatherData | null> {
    return useQuery<WeatherData | null>(["weather", city], () => getWeather(city));
}

async function getFutureWeather(city: string): Promise<FutureWeatherData | null> {
    if (city === "") {
        return null;
    }

    return client(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.WEATHER_API_KEY}&q=${city}&days=14&aqi=no&alerts=no
    `);
}

export function useFutureWeather(city: string): UseQueryResult<FutureWeatherData | null> {
    return useQuery<FutureWeatherData | null>(["futureWeather", city], () => getFutureWeather(city));
}