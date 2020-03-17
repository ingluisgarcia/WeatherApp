import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import {
    CLOUD,
    CLOUDY,
    SUN,
    RAIN,
    SNOW,
    WINDY,
    FOG,
}from './../../../constants/weathers'

const WeatherData = () =>(
    <div>
        <WeatherTemperature 
            temperature={35} 
            weatherState={SUN}
        />
        <WeatherExtraInfo humidity = {40} wind={"10 m/s"} />
    </div>
);

export default WeatherData;