import React from "react";
import {
    UilTemperature,
    UilTear,
    UilWind,
    UilSun,
} from "@iconscout/react-unicons";


const Temperature = ({ weather, units }) => {
    const tempUnit = units === 'metric' ? 'C' : 'F';
    const windUnit = units === 'metric' ? 'km/h' : 'm/s';
    let intTemp = (parseInt(weather.temp, 10));
    return (
        <div>
            <div className="flex  flex-column items-center justify-center py-6 text-4xl ">
                <img src={`${weather.iconURL}`} alt="Weather"></img>
                <p className="text-white">{`${weather.name},${weather.country}`}</p>
            </div>
            <p className="flex items-center justify-center py-6 text-2xl text-white">{`${weather.description}`}</p>

            <div className="flex flex-row items-center justify-evenly  text-white py-3 bg-indigo-900 rounded-md shadow-md md:flex-row md:max-w-xl hover:bg-indigo-500 dark:border-indigo-700 dark:bg-indigo-800 dark:hover:bg-indigo-700">

                <p className="text-5xl">{`${intTemp} °${tempUnit}`} </p>
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={20} className="mr-1" />
                        Real feel:
                        <span className="font-medium ml-1">{`${parseInt(weather.feels_like, 10)} °${tempUnit}`}</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={20} className="mr-1" />
                        Humidity:
                        <span className="font-medium ml-1">{`${parseInt(weather.humidity, 10)}%`}</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={20} className="mr-1" />
                        Wind:
                        <span className="font-medium ml-1">{`${parseInt(weather.speed, 10)} ${windUnit}`}</span>
                    </div>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">


                <UilSun size={23} />
                <p className="font-light">
                    High:{" "}
                    <span className="font-medium ml-5">{`${parseInt(weather.temp_max, 10)} °${tempUnit}`}</span>
                </p>
                <p className="font-light">|</p>

                <UilSun size={23} />
                <p className="font-light">
                    Low:{" "}
                    <span className="font-medium ml-5">{`${parseInt(weather.temp_min, 10)} °${tempUnit}`}</span>
                </p>
            </div>
        </div>
    );
}
export default Temperature