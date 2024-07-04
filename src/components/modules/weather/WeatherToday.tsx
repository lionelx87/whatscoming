import { ForecastWeatherResponse } from "../../../models/forecast-weather.model";
import { dateTimeWithFormat } from "../../../utils";

type WeatherTodayProps = {
  data: ForecastWeatherResponse;
};
export const WeatherToday: React.FC<WeatherTodayProps> = ({ data }) => {
  return (
    <div className="flex h-1/3 flex-col rounded-lg bg-[url('./assets/images/weather-bg-mobile.svg')] bg-cover bg-center bg-no-repeat lg:h-[32rem] lg:flex-1 lg:p-6">
      <h1 className="pt-2 text-center text-lg lg:mb-2 lg:text-5xl">
        {data.location.name}
      </h1>
      <p className="text-md text-center lg:text-xl">
        {dateTimeWithFormat(data.location.localtime)}
      </p>
      <div className="flex flex-1 items-center justify-between px-4 lg:items-end">
        <div>
          <h3 className="text-4xl lg:text-8xl">{data.current.temp_c} °C</h3>
          <p className="font-light lg:text-4xl">
            {data.current.condition.text}
          </p>
        </div>
        <div>
          <img
            src={data.current.condition.icon}
            alt={data.current.condition.text}
          />
        </div>
      </div>
    </div>
  );
};
