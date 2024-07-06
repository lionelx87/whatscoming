import { Forecast } from "../../../models/forecast-weather.model";
import { dateWithFormat } from "../../../utils";

type WeatherForecastProps = {
  forecast: Forecast;
};

export const WeatherForecast: React.FC<WeatherForecastProps> = ({
  forecast,
}) => {
  return (
    <div className="mt-4 flex justify-between gap-3 rounded-lg bg-indigo-800 p-2 lg:h-1/2 lg:p-3 dark:bg-custom-600 dark:text-custom-400">
      {forecast.forecastday.map(({ date_epoch, date, day }) => (
        <div
          key={date_epoch}
          className="flex flex-col items-center gap-2 lg:gap-3 lg:p-2"
        >
          <span className="lg:text-2xl lg:font-medium">
            {dateWithFormat(date)}
          </span>
          <img src={day.condition.icon} alt={day.condition.text} />
          <span className="text-red-400 lg:text-2xl">{day.maxtemp_c}</span>
          <span className="text-blue-500 lg:text-2xl">{day.mintemp_c}</span>
        </div>
      ))}
    </div>
  );
};
