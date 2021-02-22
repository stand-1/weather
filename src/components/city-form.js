import React from 'react';
import axios from "axios";
import Error from "./error";


const CityForm = ({setWeatherData, city, setCity, weatherData}) => {
    const API_KEY = '085ddf7541041cc2cfac55073c2fc638';

    const getWeatherData = (e) => {
        e.preventDefault();
        axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`)
            .then(({data}) => {
                setWeatherData({...data, error: false })
            })
            .catch(() =>{
                    setWeatherData({...weatherData, error: true})
                }
            )
    };

    const inputHandler = (e) => {
        setCity(e.target.value)
    };

    return (
        <div>
            <form action="" onSubmit={getWeatherData}>
                <input type="text" placeholder='Введите город' className='input' onChange={inputHandler}/>
                <button type='submit' className='btn'>Узнать погоду</button>
            </form>
        </div>
    );
};

export default CityForm;