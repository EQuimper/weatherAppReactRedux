const API_KEY = '70f9936bb16d2c22a5aa5462bf6ff682';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
	const url = `${ROOT_URL}&q=${city},ca`;
	
	return {
		type: FETCH_WEATHER
	};
}
