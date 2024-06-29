import { useEffect, useState } from "react";
import { fetchForecastWeather } from "../components/modules/api/weatherApi";
import { ForecastWeatherError, ForecastWeatherResponse } from "../models/forecast-weather.model";

export const useFetchforecastWeather = (location: string) => {
  const [data, setData] = useState<ForecastWeatherResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<ForecastWeatherError | null>(null);

  const fetchData = async (location: string) => {
    setLoading(true);
    setError(null);
    setData(null);
    const response = await fetchForecastWeather(location);
    if ((response as ForecastWeatherError).error) {
      setLoading(false);
      return setError(response as ForecastWeatherError);
    }
    setLoading(false);
    setData(response as ForecastWeatherResponse);
  };

  useEffect(() => {
    if (!location) return;
    fetchData(location);
  }, [location]);

  return {
    data,
    loading,
    error,
  };
};
