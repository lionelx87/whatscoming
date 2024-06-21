import { useEffect, useState } from "react";
import { fetchCurrentWeather } from "../components/modules/api/weatherApi";
import {
  CurrentWeatherError,
  CurrentWeatherResponse,
} from "../models/weather.model";

export const useFetchCurrentWeather = (location: string) => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState({});

  const fetchData = async (location: string) => {
    setLoading(true);
    setError({});
    const response = await fetchCurrentWeather(location);
    if ((response as CurrentWeatherError).error) {
      setLoading(false);
      return setError(response as CurrentWeatherError);
    }
    setLoading(false);
    setData(response as CurrentWeatherResponse);
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
