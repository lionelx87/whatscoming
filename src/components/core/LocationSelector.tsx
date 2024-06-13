import { SyntheticEvent, useState } from "react";

export const LocationSelector = () => {

  const [location, setLocation] = useState('')

  const searchLocation = (e: SyntheticEvent) => {
    e.preventDefault()
    const normalizeLocation = location.trim()
    if(!normalizeLocation) return
    setLocation('')
  }
  return (
    <form onSubmit={searchLocation} className="mx-auto w-full max-w-xl">
      <input
        type="text"
        placeholder="Ingrese su ubicación"
        className="mx-auto w-full max-w-xl rounded-lg border-0 bg-gray-600 p-5 text-gray-400 outline-none"
        value={location}
        onChange={(e) => setLocation(e.target.value)}
      />
    </form>
  );
};
