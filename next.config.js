/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    WEATHER_API_KEY: process.env.WEATHER_API_KEY,
    GEOLOCATION_API_KEY: process.env.GEOLOCATION_API_KEY,
  },
  images: {
    domains: ["cdn.weatherapi.com"],
  },
};

module.exports = nextConfig;
