import {
  CurrentWeatherError,
  CurrentWeatherResponse,
} from "../../../models/weather.model";

const apiKey = import.meta.env.VITE_API_KEY;
const baseUrl = "https://api.weatherapi.com/v1";

export const fetchCurrentWeather = async (
  location: string,
): Promise<CurrentWeatherResponse | CurrentWeatherError> => {
  try {
    const response = await fetch(
      `${baseUrl}/current.json?key=${apiKey}&aqi=no&lang=es&q=${location}`,
    );
    const data = (await response.json()) as
      | CurrentWeatherResponse
      | CurrentWeatherError;
    return data;
  } catch (error) {
    console.error("Fetch current weather failed:", error);
    throw error;
  }
};
