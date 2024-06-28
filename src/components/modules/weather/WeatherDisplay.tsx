import React from "react";
import { CurrentWeatherResponse } from "../../../models/weather.model";
import {
  CloudIcon,
  HumidityIcon,
  TempMaxIcon,
  TempMinIcon,
  WindIcon,
} from "../../icons";

type WeatherDisplayProps = {
  data: CurrentWeatherResponse;
};
export const WeatherDisplay: React.FC<WeatherDisplayProps> = ({ data }) => {
  const getDetailsData = () => {
    return [
      {
        title: "Temp. Máxima",
        Icon: <TempMaxIcon />,
        value: 26,
      },
      {
        title: "Temp. Mínima",
        Icon: <TempMinIcon />,
        value: 26,
      },
      {
        title: "Humedad",
        Icon: <HumidityIcon />,
        value: 26,
      },
      {
        title: "Nublado",
        Icon: <CloudIcon />,
        value: 26,
      },
      {
        title: "Viento",
        Icon: <WindIcon />,
        value: 26,
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
    </>
  );
};