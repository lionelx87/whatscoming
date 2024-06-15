import { SyntheticEvent, useState } from "react";

export const LocationSelector = () => {
  const [location, setLocation] = useState("");

  const searchLocation = (e: SyntheticEvent) => {
    e.preventDefault();
    const normalizeLocation = location.trim();
    if (!normalizeLocation) return;
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
