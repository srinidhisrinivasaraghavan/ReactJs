import axios from 'axios';

const API_KEY ='8069b4bd15714d2b1e4b30f9222f6f0c';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

const FETCH_WEATHER ='FETCH_WEATHER';

export default FETCH_WEATHER;

export function fetchWeather(city){
	const url=`${ROOT_URL}&q=${city},us`;
	//axios returns a promise
	//promise passed to the payload
	//promise is not the data
	const request = axios.get(url);
	//console.log('request ',request);

	return({
		type :FETCH_WEATHER,
		payload :request
	});
}