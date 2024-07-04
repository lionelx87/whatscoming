import { ForecastWeatherResponse } from "../../../models/forecast-weather.model";
import { WeatherDetails } from "./WeatherDetails";
import { WeatherForecast } from "./WeatherForecast";
import { WeatherToday } from "./WeatherToday";

type WeatherDisplayProps = {
  data: ForecastWeatherResponse;
};
export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {
  return (
    <div className="flex-1 lg:mt-10 lg:flex lg:gap-8">
      <WeatherToday data={data} />
      <div className="duration-300 ease-in lg:flex lg:h-[32rem] lg:flex-1 lg:flex-col">
        <WeatherDetails data={data} />
        <WeatherForecast data={data} />
      </div>
    </div>
  );
};
