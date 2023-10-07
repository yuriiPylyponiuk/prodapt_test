import * as types from './weatherActionTypes'
import weatherReducer from './weatherReducer' // Update the path accordingly

describe('weatherReducer', () => {
  it('should return the initial state', () => {
    expect(weatherReducer(undefined, {})).toEqual({
      weather: {},
      city: '',
      findStatus: false,
      revert: false,
    })
  })

  it('should handle SET_WEATHER action', () => {
    const weatherData = { temperature: 25, condition: 'Sunny' }
    const action = {
      type: types.SET_WEATHER,
      payload: weatherData,
    }
    expect(weatherReducer({}, action)).toEqual({
      weather: weatherData,
    })
  })

  it('should handle SET_CITY action', () => {
    const city = 'New York'
    const action = {
      type: types.SET_CITY,
      payload: city,
    }
    expect(weatherReducer({}, action)).toEqual({
      city,
    })
  })

  it('should handle FIND_STATUS action', () => {
    const status = true
    const action = {
      type: types.FIND_STATUS,
      payload: status,
    }
    expect(weatherReducer({}, action)).toEqual({
      findStatus: status,
    })
  })

  it('should handle REVERT_LIST action', () => {
    const revert = true
    const action = {
      type: types.REVERT_LIST,
      payload: revert,
    }
    expect(weatherReducer({}, action)).toEqual({
      revert,
    })
  })

  it('should return the current state for unknown action type', () => {
    const currentState = {
      weather: { temperature: 22, condition: 'Cloudy' },
      city: 'London',
      findStatus: true,
      revert: false,
    }
    const action = {
      type: 'UNKNOWN_ACTION_TYPE',
      payload: 'some data',
    }
    expect(weatherReducer(currentState, action)).toEqual(currentState)
  })
})
