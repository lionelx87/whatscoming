import { WeatherContainer } from "../modules/weather";

export const Main = () => {
  return (
    <div className="container mx-auto flex flex-1 flex-col items-center justify-center gap-4 overflow-y-auto px-4 py-4">
      <WeatherContainer />
    </div>
  );
};
