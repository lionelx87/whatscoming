import { ForecastWeatherError, ForecastWeatherResponse } from "../../../models/forecast-weather.model";
import { Alert } from "../../ui";
import { WeatherDisplay } from "./WeatherDisplay";

type WeatherInformationProps = {
  data: ForecastWeatherResponse;
  error: ForecastWeatherError;
  loading: boolean;
};

export const WeatherInformation: React.FC<WeatherInformationProps> = ({
  data,
  error,
  loading,
}) => {
  return (
    <div className="w-full flex-1 text-white flex">
      { !loading && error && <Alert message={error.error.message} /> }
      { !loading && data && <WeatherDisplay data={data} />}
    </div>
  );
};
