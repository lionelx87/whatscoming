import {
  CurrentWeatherError,
  CurrentWeatherResponse,
} from "../../../models/weather.model";
import { Alert } from "../../ui";
import { WeatherDisplay } from "./WeatherDisplay";

type WeatherInformationProps = {
  data: CurrentWeatherResponse;
  error: CurrentWeatherError;
  loading: boolean;
};

export const WeatherInformation: React.FC<WeatherInformationProps> = ({
  data,
  error,
  loading,
}) => {
  return (
    <div className="w-full flex-1 text-white">
      { !loading && error && <Alert message={error.error.message} /> }
      { !loading && data && <WeatherDisplay data={data} />}
    </div>
  );
};
