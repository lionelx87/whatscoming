import {
  CurrentWeatherError,
  CurrentWeatherResponse,
} from "../../../models/weather.model";
import { Alert } from "../../ui";

type WeatherInformationProps = {
  data: CurrentWeatherResponse;
  error: CurrentWeatherError;
};

export const WeatherInformation: React.FC<WeatherInformationProps> = ({
  data,
  error,
}) => {
  return (
    <div className="w-full flex-1 text-white">
      { error && <Alert message={error.error.message} /> }
    </div>
  );
};
