import * as types from './weatherActionTypes'

const initialState = {
  weather: {},
  city: '',
}

export default function weatherReducer(state = initialState, action: any) {
  switch (action.type) {
    case types.SET_WEATHER:
      return {
        ...state,
        weather: action.payload,
      }

    case types.SET_CITY:
      return {
        ...state,
        city: action.payload,
      }

    default:
      return state
  }
}
