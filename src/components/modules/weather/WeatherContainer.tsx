import { useState } from "react";
import { useFetchforecastWeather } from "../../../hooks/useFetchForecastWeather";
import { Alert, Loading } from "../../ui";
import { LocationSelector } from "./LocationSelector";
import { WeatherDetails } from "./WeatherDetails";
import { WeatherForecast } from "./WeatherForecast";
import { WeatherToday } from "./WeatherToday";

export const WeatherContainer = () => {
  const [locationSelected, setLocationSelected] = useState("");
  const { data, loading, error } = useFetchforecastWeather(locationSelected);
  const { message } = error?.error || {};
  const { location, current, forecast } = data || {};
  const isReadyDataTime = location && current && forecast;
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-4">
      <LocationSelector setLocationSelected={setLocationSelected} />
      {loading && <Loading />}
      {locationSelected && (
        <div className="flex w-full flex-1 text-white">
          {!loading && error && <Alert message={message} />}
          {!loading && isReadyDataTime && (
            <div className="flex flex-col flex-1 lg:mt-10 lg:flex-row lg:gap-8">
              <WeatherToday
                name={location.name}
                localtime={location.localtime}
                temp_c={current.temp_c}
                condition={current.condition}
              />
              <div className="duration-300 ease-in lg:flex lg:h-[32rem] lg:flex-1 lg:flex-col">
                <WeatherDetails
                  maxtemp_c={forecast.forecastday[0].day.maxtemp_c}
                  mintemp_c={forecast.forecastday[0].day.mintemp_c}
                  humidity={current.humidity}
                  cloud={current.cloud}
                  wind_kph={current.wind_kph}
                />
                <WeatherForecast forecast={forecast} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
