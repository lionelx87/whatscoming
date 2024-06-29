import React from "react";
import { ForecastWeatherResponse } from "../../../models/forecast-weather.model";
import {
  CloudIcon,
  HumidityIcon,
  TempMaxIcon,
  TempMinIcon,
  WindIcon,
} from "../../icons";

type WeatherDisplayProps = {
  data: ForecastWeatherResponse;
};
export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {
  const getDetailsData = () => {
    return [
      {
        title: "Temp. Máxima",
        Icon: <TempMaxIcon />,
        value: `${data.forecast.forecastday[0].day.maxtemp_c}° C`,
      },
      {
        title: "Temp. Mínima",
        Icon: <TempMinIcon />,
        value: `${data.forecast.forecastday[0].day.mintemp_c}° C`,
      },
      {
        title: "Humedad",
        Icon: <HumidityIcon />,
        value: `${data.current.humidity} %`,
      },
      {
        title: "Nublado",
        Icon: <CloudIcon />,
        value: `${data.current.cloud} %`,
      },
      {
        title: "Viento",
        Icon: <WindIcon />,
        value: `${data.current.wind_kph} km/h`,
      },
    ];
  };

  return (
    <>
      <div className="flex h-1/3 flex-col rounded-lg bg-[url('./assets/images/weather-bg-mobile.svg')] bg-cover bg-center bg-no-repeat">
        <h1 className="pt-2 text-center text-lg">{data.location.name}</h1>
        <p className="text-md text-center">{data.location.localtime}</p>
        <div className="flex flex-1 items-center justify-between px-4">
          <div>
            <h3 className="text-4xl">{data.current.temp_c} °C</h3>
            <p className="font-light">{data.current.condition.text}</p>
          </div>
          <div>
            <img src={data.current.condition.icon} alt="Icono" />
          </div>
        </div>
      </div>
      <div className="mt-4 flex flex-col gap-3 rounded-lg p-2 dark:bg-custom-600 dark:text-custom-400">
        {getDetailsData().map((elem) => (
          <div
            key={elem.title}
            className="flex items-center justify-between border-b border-custom-800 pb-2 last:border-b-0 last:pb-0"
          >
            <div className="flex items-center gap-3">
              {elem.Icon}
              <span>{elem.title}</span>
            </div>
            <div>{elem.value}</div>
          </div>
        ))}
      </div>
      <div className="mt-4 flex justify-between gap-3 rounded-lg p-2 dark:bg-custom-600 dark:text-custom-400">
        {
          [0, 1, 2, 3, 4].map((elem) => (
          <div key={elem} className="flex flex-col items-center gap-2">
              <span>28/05</span>
              <img src={data.current.condition.icon} alt="Icono" />
              <span className="text-red-400">MAX</span>
              <span className="text-blue-500">MIN</span>
            </div>
          ))
        }
      </div>
    </>
  );
};
