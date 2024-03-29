import {createStore} from 'redux';
import {city} from './../reducers/city';

const initialState = {
    city: 'Santa Marta, co',
};


export const store = createStore(city, initialState,
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());