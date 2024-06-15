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
        className="mx-auto w-full max-w-xl rounded-lg border-0 bg-custom-600 p-5 text-custom-400 outline-none"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    </form>
  );
};
