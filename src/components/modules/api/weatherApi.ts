import {
  CurrentWeatherError,
  CurrentWeatherResponse,
} from "../../../models/current-weather.model";
import {
  ForecastWeatherError,
  ForecastWeatherResponse,
} from "../../../models/forecast-weather.model";

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

export const fetchForecastWeather = async (
  location: string,
): Promise<ForecastWeatherResponse | ForecastWeatherError> => {
  try {
    const response = await fetch(
      `${baseUrl}/forecast.json?key=${apiKey}&aqi=no&&alerts=no&days=5&lang=es&q=${location}`,
    );
    const data = (await response.json()) as
      | ForecastWeatherResponse
      | ForecastWeatherError;
    return data;
  } catch (error) {
    console.error("Fetch Forecast weather failed:", error);
    throw error;
  }
};
