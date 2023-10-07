import * as types from './weatherActionTypes'
import { revertList, setCity, setFindStatus, setWeather } from './weatherActions'

describe('Weather Actions', () => {
  it('should create an action to set weather data', () => {
    const weatherData = { temperature: 25, condition: 'Sunny' }
    const expectedAction = {
      type: types.SET_WEATHER,
      payload: weatherData,
    }
    expect(setWeather(weatherData)).toEqual(expectedAction)
  })

  it('should create an action to set city', () => {
    const city = 'New York'
    const expectedAction = {
      type: types.SET_CITY,
      payload: city,
    }
    expect(setCity(city)).toEqual(expectedAction)
  })

  it('should create an action to set find status', () => {
    const status = true
    const expectedAction = {
      type: types.FIND_STATUS,
      payload: status,
    }
    expect(setFindStatus(status)).toEqual(expectedAction)
  })

  it('should create an action to revert list', () => {
    const revert = true
    const expectedAction = {
      type: types.REVERT_LIST,
      payload: revert,
    }
    expect(revertList(revert)).toEqual(expectedAction)
  })
})
