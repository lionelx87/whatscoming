import React, { Dispatch, SetStateAction } from "react";

type WeatherInformationProps = {
    data: Dispatch<SetStateAction<unknown>>;
    error: Dispatch<SetStateAction<unknown>>;
  }
  
export const WeatherInformation: React.FC<WeatherInformationProps> = ({ data, error }) => {
    return (
        <div className="w-full flex-1 text-white">
            {JSON.stringify(error)}
            {JSON.stringify(data)}
        </div>
    )
}