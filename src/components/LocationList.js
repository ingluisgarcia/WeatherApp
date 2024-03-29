import React from 'react';
import WeatherLocation from './WeatherLocation';
import PropTypes from 'prop-types';
import './styles.css';



const LocationList = ({cities, onSelectedLocation}) => {
    const handleWeatherLocationClick = city => {
        console.log("handleWeatherLocationClick");
        onSelectedLocation(city);
    };
    const strToComponents = cities => (
        cities.map( (city) => (
        <WeatherLocation 
        key={city} 
        city={city}
        onWeatherLocationClick={() => handleWeatherLocationClick(city)}/>))
    );
    //console.log(cities);
    return(<div className="locationlist">
        {strToComponents(cities)}
    </div>);
};

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}

export default LocationList;