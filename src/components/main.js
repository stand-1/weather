import React, {useState} from  'react';

import CityForm from "./city-form";
import Weather from "./weather";
import './main.css'
import Error from "./error";


 function Main() {
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState('');
    return (
        <div className='app'>
            <div className='weather'>

                <CityForm setWeatherData={setWeatherData} setCity={setCity} city={city} weatherData={weatherData}/>

                {
                    (Object.entries(weatherData).length === 0 ? 'Введите город'  : weatherData.error ? <Error/> : <Weather weatherData={weatherData}/>)
                }
            </div>
        </div>
    );
}

export default Main;