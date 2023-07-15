export type WeatherData = {
    location: {
        country: string;
        lat: number;
        localtime: string;
        localtime_epoch: number;
        lon: number;
        name: string;
        region: string;
        tz_id: string;
    };
    current: {
        cloud: number;
        condition: {
            text: string;
            icon: string;
            code: number;
        };
        feelslike_c: number;
        feelslike_f: number;
        gust_kph: number;
        gust_mph: number;
        humidity: number;
        is_day: number;
        last_updated: string;
        last_updated_epoch: number;
        precip_in: number;
        precip_mm: number;
        pressure_in: number;
        pressure_mb: number;
        temp_c: number;
        temp_f: number;
        uv: number;
        vis_km: number;
        vis_miles: number;
        wind_degree: number;
        wind_dir: string;
        wind_kph: number;
        wind_mph: number;
    };
};

export type FutureWeatherData = {
    location: {
        name: string;
        region: string;
        country: string;
        lat: number;
        lon: number;
        tz_id: string;
        localtime_epoch: number;
        localtime: string;
    };
    current: {
        last_updated_epoch: number;
        last_updated: string;
        temp_c: number;
        temp_f: number;
        is_day: number;
        condition: {
            text: string;
            icon: string;
            code: number;
        };
        wind_mph: number;
        wind_kph: number;
        wind_degree: number;
        wind_dir: string;
        pressure_mb: number;
        pressure_in: number;
        precip_mm: number;
        precip_in: number;
        humidity: number;
        cloud: number;
        feelslike_c: number;
        feelslike_f: number;
        vis_km: number;
        vis_miles: number;
        uv: number;
        gust_mph: number;
        gust_kph: number;
    };
    forecast: {
        forecastday: [
            {
                date: string;
                date_epoch: number;
                day: {
                    maxtemp_c: number;
                    maxtemp_f: number;
                    mintemp_c: number;
                    mintemp_f: number;
                    avgtemp_c: number;
                    avgtemp_f: number;
                    maxwind_mph: number;
                    maxwind_kph: number;
                    totalprecip_mm: number;
                    totalprecip_in: number;
                    avgvis_km: number;
                    avgvis_miles: number;
                    avghumidity: number;
                    condition: {
                        text: string;
                        icon: string;
                        code: number;
                    };
                    uv: number;
                };
                astro: {
                    sunrise: string;
                    sunset: string;
                    moonrise: string;
                    moonset: string;
                    moon_phase: string;
                    moon_illumination: string;
                };
                hour: {
                    time_epoch: number;
                    time: string;
                    temp_c: number;
                    temp_f: number;
                    is_day: number;
                    condition: {
                        text: string;
                        icon: string;
                        code: number;
                    };
                    wind_mph: number;
                    wind_kph: number;
                    wind_degree: number;
                    wind_dir: string;
                    pressure_mb: number;
                    pressure_in: number;
                    precip_mm: number;
                    precip_in: number;
                    humidity: number;
                    cloud: number;
                    feelslike_c: number;
                    feelslike_f: number;
                    windchill_c: number;
                    windchill_f: number;
                    heatindex_c: number;
                    heatindex_f: number;
                    dewpoint_c: number;
                    dewpoint_f: number;
                    will_it_rain: number;
                    chance_of_rain: number;
                    will_it_snow: number;
                    chance_of_snow: number;
                    vis_km: number;
                    vis_miles: number;
                    gust_mph: number;
                    gust_kph: number;
                }[];
            }
        ];
    };
};
