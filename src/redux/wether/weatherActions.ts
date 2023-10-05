import * as types from './weatherActionTypes'

export function setWeather(weatherData: any) {
  return { type: types.SET_WEATHER, payload: weatherData }
}

export function setCity(city: string) {
  return { type: types.SET_CITY, payload: city }
}
