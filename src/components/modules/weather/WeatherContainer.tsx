import { useState } from "react";
import { useFetchCurrentWeather } from "../../../hooks/useFetchCurrentWeather";
import { LocationSelector } from "./LocationSelector";
import { WeatherInformation } from "./WeatherInformation";
import { Loading } from "../../ui";

export const WeatherContainer = () => {
  const [locationSelected, setLocationSelected] = useState("");
  const { data, loading, error } = useFetchCurrentWeather(locationSelected);
  return (
    <div className="flex w-full flex-1 flex-col items-center justify-center gap-4">
      <LocationSelector setLocationSelected={setLocationSelected} />
      { loading && <Loading /> }
      { locationSelected && <WeatherInformation data={data} error={error} /> }
    </div>
  );
};
