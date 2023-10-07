import * as types from './weatherActionTypes'

export function setWeather(weatherData: any) {
  return { type: types.SET_WEATHER, payload: weatherData }
}

export function setCity(city: string) {
  return { type: types.SET_CITY, payload: city }
}

export function setFindStatus(status: boolean) {
  return { type: types.FIND_STATUS, payload: status }
}

export function revertList(revert: boolean) {
  return { type: types.REVERT_LIST, payload: revert }
}
