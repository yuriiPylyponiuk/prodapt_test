import * as types from './weatherActionTypes'

export function getAllProductsRequestAction() {
  return { type: types.GET_WEATHER_REQUEST }
}

export function getAllProductsSuccessAction(payload: any) {
  return { type: types.GET_WEATHER_SUCCESS, payload }
}
