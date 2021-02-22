import React from 'react';

const Weather = ({weatherData}) => {
    const formattedTime = (time) => {

        const date = new Date(time * 1000);

        const hours = date.getHours();

        const minutes = date.getMinutes();

        const seconds = date.getSeconds();

        return hours + ':' + minutes + ':' + seconds;
    };
    return (
        <div>
            <p className='static'>Город: {weatherData.name}
                <img src={`http://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`}
                     alt="Icon depicting current weather" className='png'
                />
            </p>
            <p className='static_1'>Температура: {(weatherData.main.temp - 273.15).toFixed(2)} C°</p>
            <p className='static_2'>Скорость ветра: {weatherData.wind.speed} м.с</p>
            <p className='static_3'>Время: {formattedTime(weatherData.dt)}</p>
            <p className='static_4'>Влажность: {weatherData.main.humidity} %</p>
            <p className='static_5'>Восход : {formattedTime(weatherData.sys.sunrise)}</p>
            <p className='static_6'>Закат: {formattedTime(weatherData.sys.sunset)}</p>
        </div>
    );
};

export default Weather;