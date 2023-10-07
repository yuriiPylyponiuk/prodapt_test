import * as types from './weatherActionTypes'

const initialState = {
  weather: {},
  city: '',
  findStatus: false,
  revert: false,
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
    case types.FIND_STATUS:
      return {
        ...state,
        findStatus: action.payload,
      }
    case types.REVERT_LIST:
      return {
        ...state,
        revert: action.payload,
      }

    default:
      return state
  }
}
