import React, { Dispatch, SetStateAction, SyntheticEvent, useState } from "react";

type LocationSelectorProps = {
  setLocationSelected: Dispatch<SetStateAction<string>>;
}

export const LocationSelector: React.FC<LocationSelectorProps> = ({ setLocationSelected }) => {
  const [location, setLocation] = useState("");

  const searchLocation = async (e: SyntheticEvent) => {
    e.preventDefault();
    const normalizeLocation = location.trim();
    if (!normalizeLocation) return;
    // const weatherData = await fetchCurrentWeather(normalizeLocation);
    setLocationSelected(normalizeLocation)
    setLocation("");
  };
  return (
    <form onSubmit={searchLocation} className="mx-auto w-full max-w-xl">
      <input
        type="text"
        placeholder="Ingrese su ubicación"
        className="mx-auto w-full max-w-xl rounded-lg border-0 p-5 outline-none duration-300 ease-in dark:bg-custom-600 dark:text-custom-400"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    </form>
  );
};
