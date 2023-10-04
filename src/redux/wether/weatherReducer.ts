import * as types from "./weatherActionTypes";

const initialState = {
  weather: {},
};

export default function reducer(state = initialState, action: any) {
  switch (action.type) {
    case types.GET_WEATHER_REQUEST:
      return {
        ...state,
        products: {
          data: false,
          loaded: true,
          error: false,
          show: false,
        },
      };
    case types.GET_WEATHER_SUCCESS:
      return {
        ...state,
        products: {
          data: action.payload,
          loaded: false,
          error: false,
          show: true,
        },
      };
    case types.GET_WEATHER_FAILED:
      return {
        ...state,
        products: {
          data: false,
          loaded: false,
          error: true,
          show: false,
        },
      };

    default:
      return state;
  }
}
