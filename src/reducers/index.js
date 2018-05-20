import { combineReducers } from 'redux';
import WeatherReducer from './reducer_weather_fetch';


const rootReducer = combineReducers({
  weather: WeatherReducer,
  
});

export default rootReducer;
