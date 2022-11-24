
const GetIconURL = (iconId) => `https://openweathermap.org/img/wn/${iconId}@2x.png`;

const getWeatherData = async (city_name, units = 'metric') => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&appid=${import.meta.env.VITE_REACT_APP_API_KEY}&units=${units}`;

    const data = await fetch(API_URL)
        .then((response) => response.json())
        .then((data) => data);
    const { weather,
        main: { temp, feels_like, humidity, temp_max, temp_min },
        wind: { speed },
        sys: { country, sunrise, sunset },
        name,
    } = data;
    const { description, icon } = weather[0];
    return {
        description,
        iconURL: GetIconURL(icon),
        temp,
        feels_like,
        humidity,
        temp_max,
        temp_min,
        speed,
        sunset,
        sunrise,
        country,
        name,
    };
}

const getWeatherDataByPos = async (lat, lon, units = 'metric') => {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_REACT_APP_API_KEY}&units=${units}`;

    const data = await fetch(API_URL)
        .then((response) => response.json())
        .then((data) => data);
    const { weather,
        main: { temp, feels_like, humidity, temp_max, temp_min },
        wind: { speed },
        sys: { country, sunrise, sunset },
        name,
    } = data;
    const { description, icon } = weather[0];
    return {
        description,
        iconURL: GetIconURL(icon),
        temp,
        feels_like,
        humidity,
        temp_max,
        temp_min,
        speed,
        sunset,
        sunrise,
        country,
        name,
    };
}

export { getWeatherData, getWeatherDataByPos }


