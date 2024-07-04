import { ForecastWeatherResponse } from "../../../models/forecast-weather.model";
import { dateWithFormat } from "../../../utils";

type WeatherForecastProps = {
  data: ForecastWeatherResponse;
};

export const WeatherForecast: React.FC<WeatherForecastProps> = ({ data }) => {
  return (
    <div className="mt-4 flex justify-between gap-3 rounded-lg bg-indigo-800 p-2 lg:h-1/2 lg:p-3 dark:bg-custom-600 dark:text-custom-400">
      {data.forecast.forecastday.map((elem) => (
        <div
          key={elem.date_epoch}
          className="flex flex-col items-center gap-2 lg:gap-3 lg:p-2"
        >
          <span className="lg:text-2xl lg:font-medium">
            {dateWithFormat(elem.date)}
          </span>
          <img src={elem.day.condition.icon} alt={elem.day.condition.text} />
          <span className="text-red-400 lg:text-2xl">{elem.day.maxtemp_c}</span>
          <span className="text-blue-500 lg:text-2xl">
            {elem.day.mintemp_c}
          </span>
        </div>
      ))}
    </div>
  );
};
