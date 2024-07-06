import {
  CloudIcon,
  HumidityIcon,
  TempMaxIcon,
  TempMinIcon,
  WindIcon,
} from "../../icons";

type WeatherDetailsProps = {
  maxtemp_c: number;
  mintemp_c: number;
  humidity: number;
  cloud: number;
  wind_kph: number;
};

export const WeatherDetails: React.FC<WeatherDetailsProps> = ({
  maxtemp_c,
  mintemp_c,
  humidity,
  cloud,
  wind_kph,
}) => {
  const detailsData = [
    {
      title: "Temp. Máxima",
      Icon: <TempMaxIcon />,
      value: `${maxtemp_c}° C`,
    },
    {
      title: "Temp. Mínima",
      Icon: <TempMinIcon />,
      value: `${mintemp_c}° C`,
    },
    {
      title: "Humedad",
      Icon: <HumidityIcon />,
      value: `${humidity} %`,
    },
    {
      title: "Nublado",
      Icon: <CloudIcon />,
      value: `${cloud} %`,
    },
    {
      title: "Viento",
      Icon: <WindIcon />,
      value: `${wind_kph} km/h`,
    },
  ];
  return (
    <div className="mt-4 flex flex-col gap-3 rounded-lg bg-indigo-800 p-3 lg:mt-0 lg:h-1/2 lg:gap-4 lg:p-4 dark:bg-custom-600 dark:text-custom-400">
      {detailsData.map((elem) => (
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
  );
};
