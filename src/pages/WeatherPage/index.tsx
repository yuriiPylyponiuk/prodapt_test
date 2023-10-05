import * as Location from 'expo-location'
import React, { useEffect } from 'react'
import { ScrollView, TextInput, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { Button } from '../../../components/atoms/Button'
import { Label } from '../../../components/atoms/Label'
import { useGetCityGeoDataMutation, useGetWeatherLocationMutation } from '../../api/weatherSlice'
import { RootState } from '../../redux/configureStore'
import { setCity, setWeather } from '../../redux/wether/weatherActions'

export const WeatherPage = () => {
  const dispatch = useDispatch()
  const weather = useSelector((state: RootState) => state.weather)

  const [getWeatherLocation, { data: weatherLocation }] = useGetWeatherLocationMutation()
  const [getCityGeoData, { data: cityLocation }] = useGetCityGeoDataMutation()

  useEffect(() => {
    ;(async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        return
      }

      const location = await Location.getCurrentPositionAsync({})
      const { latitude, longitude } = location.coords
      getWeatherLocation({ lon: longitude, lat: latitude })
    })()
  }, [])
  useEffect(() => {
    if (weatherLocation) {
      dispatch(setWeather(weatherLocation))
    }
  }, [weatherLocation])

  useEffect(() => {
    if (cityLocation) {
      const { lon, lat } = cityLocation[0]
      getWeatherLocation({ lon, lat })
    }
  }, [cityLocation])

  const handleInput = (weatherData: string) => {
    dispatch(setCity(weatherData))
  }

  const handleSubmit = () => {
    if (weather.city) {
      getCityGeoData(weather.city)
    }
  }

  return (
    <Layout>
      {weather.weather ? (
        <View>
          <View>
            <TextInput
              onChangeText={handleInput}
              style={{ height: 40, margin: 12, borderWidth: 1, padding: 10 }}
              value={weather.city}
            />
            <Button onPress={handleSubmit} text={'Search'} textColor={'content1'} />
          </View>
          <ScrollView>
            <Label title={JSON.stringify(weather.weather)} userColor={'error'} />
            {cityLocation && <Label title={JSON.stringify(cityLocation[0])} userColor={'brand1'} />}
          </ScrollView>
        </View>
      ) : (
        <Label title={'Loading'} />
      )}
    </Layout>
  )
}

const Layout = styled.View`
  flex: 1;
  background-color: #fff;
  padding-top: 20px;
  align-items: center;
  justify-content: center;
`
