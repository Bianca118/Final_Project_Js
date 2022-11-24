import './App.css';
import TimeLocation from './components/TimeLocation';
import Temperature from './components/Temperature';
import { getWeatherData, getWeatherDataByPos } from './srvc/WeatherService';
import { useEffect } from 'react';
import { useState } from 'react';
import { UilLocationPoint } from '@iconscout/react-unicons';
import LandingPage from './components/LandingPage';
import { Route, Routes, Link, useNavigate } from 'react-router-dom';
import { UilHome } from '@iconscout/react-unicons';
import useGeolocation from './hooks/useGeolocation';

function App() {
  const [city_name, setCity] = useState('paris');
  const [weather, setweather] = useState([]);
  const [units, setUnits] = useState('imperial');
  const navigate = useNavigate();
  const geolocation = useGeolocation({}, () => {}, true);

  useEffect(() => {
    const fetchWeatherData = async () => {
      const data = await getWeatherData(city_name, units);
      setweather(data);
    };
    fetchWeatherData();
  }, [units, city_name]);

  const handleClick = (e) => {
    const button = e.currentTarget;
    const currentUnit = button.innerText.slice(1);
    const isMetric = currentUnit === 'C';
    button.innerText = isMetric ? '°F' : '°C';
    setUnits(isMetric ? 'metric' : 'imperial');
  };

  const goHome = () => {
    navigate('/');
  };

  const getLocation = () => {
    fetchWeatherPosData();
  };

  const fetchWeatherPosData = async () => {
    const data = await getWeatherDataByPos(
      geolocation.latitude,
      geolocation.longitude
    );
    setweather(data);
  };

  const enter = (e) => {
    if (e.keyCode === 13) {
      setCity(e.currentTarget.value);
    }
  };

  return (
    <div
      className='mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-indigo-200 from-indigo-300 to-indigo-500 h-fit shadow-xl
    shadpw-gray-400'
    >
      {weather && (
        <div className='container '>
          <div className='flex flex-row justify-center my-6'>
            <div className='relative w-full flex flex-row w-3/4 items-center justify-center space-x-3'>
              <div className='relative w-full'>
                <div className='flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none'>
                  <svg
                    aria-hidden='true'
                    className='w-5 h-5 text-gray-500 dark:text-gray-400'
                    fill='currentColor'
                    viewBox='0 0 20 20'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      fill-rule='evenodd'
                      d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
                      clip-rule='evenodd'
                    ></path>
                  </svg>
                </div>
                <input
                  onKeyDown={enter}
                  type='text'
                  id='voice-search'
                  className='bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='Search Cities...'
                  required
                />
              </div>
              <UilLocationPoint
                size={25}
                className='text-white cursor-pointer transition ease-out hover:scale-125'
                onClick={getLocation}
              />
              <Link to='Landing'>
                <UilHome
                  size={25}
                  className='text-white cursor-pointer transition ease-out hover:scale-125'
                  onClick={goHome}
                />
              </Link>
            </div>

            <div className='flex flex-row w-1/4 items-center justify-center'>
              <button
                onClick={(e) => handleClick(e)}
                name='metric'
                className='text-white cursor-pointer transition ease-out hover:scale-125 text-2xl'
              >
                {' '}
                °C
              </button>
            </div>
          </div>

          <TimeLocation />
          <Temperature weather={weather} units={units} />
        </div>
      )}

      <Routes>
        <Route path='Landing' element={<LandingPage />} />
      </Routes>
    </div>
  );
}

export default App;