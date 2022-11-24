import React from "react";
import { useState } from "react";
import { useEffect } from "react";

const Daily = () => {
    const [weatherData, setWeatherData] = useState();

    // const [city, setCityF] = useState();


    useEffect(() => {
        const API = `https://api.openweathermap.org/data/2.5/forecast?q=london&&appid=${APP_API_KEY}`;
        fetch(API)
            .then(res => res.json())
            .then(data => {
                setWeatherData(data);

            })
            .catch(err => console.log(err))

    }, []);


    return (

        <div>
            {weatherData &&
                <div className="flex flex-row items-center justify-between text-white">

                    <div className="flex flex-col items-center justify-center">
                        <p className="font-light text-sm">Monday</p>
                        <p className="font-medium">22 C</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-light text-sm">Tuesday</p>
                        <p className="font-medium">22 C</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-light text-sm">Wednesdey</p>
                        <p className="font-medium">22 C</p>
                    </div>
                    <div className="flex flex-col items-center justify-center">
                        <p className="font-light text-sm">Thursday</p>
                        <p className="font-medium">22 C</p>
                    </div>

                </div>

            }

        </div>
    )
};
export default Daily