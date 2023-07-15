export const getCurrentPosition = (): Promise<GeolocationPosition> => {
    return new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
    });
};

export const getCityFromCoordinates = async (latitude: number, longitude: number) => {
    const response = await fetch(`https://api.opencagedata.com/geocode/v1/json?key=${process.env.GEOLOCATION_API_KEY}&q=${latitude},${longitude}`);
    const data = await response.json();

    if (data.results.length > 0) {
        return data.results[0].components.city;
    } else {
        return "";
    }
};