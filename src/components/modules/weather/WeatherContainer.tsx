import { useState } from "react";
import { useFetchforecastWeather } from "../../../hooks/useFetchForecastWeather";
import { Loading } from "../../ui";
import { LocationSelector } from "./LocationSelector";
import { WeatherInformation } from "./WeatherInformation";

export const WeatherContainer = () => {
  const [locationSelected, setLocationSelected] = useState("");
  const { data, loading, error } = useFetchforecastWeather(locationSelected);
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-4">
      <LocationSelector setLocationSelected={setLocationSelected} />
      { loading && <Loading /> }
      { locationSelected && <WeatherInformation data={data} error={error} loading={loading} /> }
    </div>
  );
};
