
import axios from 'axios';

const API_KEY = "486af5e6f664c6e5f876d7065f4c162a";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(term) {
  const url = `${ROOT_URL}&q=${term},us`
  const request = axios.get(url)
  return {
    type: FETCH_WEATHER,
    payload: request
  };
}
