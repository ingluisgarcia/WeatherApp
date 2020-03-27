import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
//import WeatherLocation from './components/WeatherLocation';
import { Grid, Col, Row } from 'react-flexbox-grid';
import {createStore} from 'redux';
import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended'
import './App.css';
//import { render } from '@testing-library/react';

const cities = [
  'Santa Marta, co',
  'Tokyo, jp',
  'Paris, fr',
  'Washington, us',
  'Medellin, co',
  'Bogota, co',
];

const store = createStore(()=>{}, 
  window.__REDUX_DEVTOOL_EXTENSION__ && window.__REDUX_DEVTOOL_EXTENSION__());

class App extends Component{

  constructor(){
    super();
    this.state = {city: null};
  }
  handleSelectedLocation = city =>{
    this.setState({city});//this.setState({city: city});
    console.log(`handleSelectedLocation ${city}`);
    const action = {type: 'setCity', value: city};
    store.dispatch(action); 
  }
  render(){
    const {city} = this.state;
    return (  
      <Grid>
        <Row>
          <AppBar position='sticky'>
            <Toolbar>
              <Typography variant='title' color='inherit'>
                Weather App
              </Typography>
            </Toolbar>
          </AppBar>
        </Row>
        <Row>
          <Col xs={12} md={6}>
            <LocationList 
            cities={cities}
            onSelectedLocation={this.handleSelectedLocation}>
            </LocationList>
          </Col>
          <Col xs={12} md={6}>
            <Paper elevation={4}>
              <div className="details">
                {
                city && //city === null 
                <ForecastExtended city={city}></ForecastExtended>
                }
                
              </div>
            </Paper>
          </Col>
        </Row>
      </Grid>
    );
  }
}

export default App;
