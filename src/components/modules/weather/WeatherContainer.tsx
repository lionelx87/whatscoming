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
  const message = error?.error.message;
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-4">
      <LocationSelector setLocationSelected={setLocationSelected} />
      {loading && <Loading />}
      {locationSelected && (
        <div className="flex w-full flex-1 text-white">
          {!loading && error && <Alert message={message} />}
          {!loading && data && (
            <div className="flex-1 lg:mt-10 lg:flex lg:gap-8">
              <WeatherToday data={data} />
              <div className="duration-300 ease-in lg:flex lg:h-[32rem] lg:flex-1 lg:flex-col">
                <WeatherDetails data={data} />
                <WeatherForecast data={data} />
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};
