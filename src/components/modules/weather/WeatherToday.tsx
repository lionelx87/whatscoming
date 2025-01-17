import { Condition } from "../../../models/forecast-weather.model";
import { dateTimeWithFormat } from "../../../utils";

type WeatherTodayProps = {
  name: string;
  localtime: string;
  temp_c: number;
  condition: Condition;
};
export const WeatherToday: React.FC<WeatherTodayProps> = ({
  name,
  localtime,
  temp_c,
  condition,
}) => {
  return (
    <div className="flex h-44 flex-col rounded-lg bg-[url('./assets/images/weather-bg-mobile.svg')] bg-cover bg-center bg-no-repeat lg:h-[32rem] lg:flex-1 lg:p-6">
      <h1 className="pt-2 text-center text-lg lg:mb-2 lg:text-5xl">{name}</h1>
      <p className="text-md text-center lg:text-xl">
        {dateTimeWithFormat(localtime)}
      </p>
      <div className="flex flex-1 items-center justify-between px-4 lg:items-end">
        <div>
          <h3 className="text-4xl lg:text-8xl">{temp_c} °C</h3>
          <p className="font-light lg:text-4xl">{condition.text}</p>
        </div>
        <div>
          <img src={condition.icon} alt={condition.text} />
        </div>
      </div>
    </div>
  );
};
