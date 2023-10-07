// Import statements
import * as Location from 'expo-location'
import React, { useEffect } from 'react'
import { View } from 'react-native'
import { ScrollView } from 'react-native-virtualized-view'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

// Components and utilities
import { Label } from '../../../components/atoms/Label'
import { SearchControls } from '../../../components/molecules/SearchControls'
import { WeatherItem } from '../../../components/molecules/WeatherItem'
import { WeatherPredict } from '../../../components/organism/WeatherPredict'
import { images } from '../../../components/theme/'
import { useGetCityGeoDataMutation, useGetWeatherLocationMutation } from '../../api/weatherSlice'
import { timestampToRegularHour } from '../../helpers'
import { RootState } from '../../redux/configureStore'
import { revertList, setCity, setFindStatus, setWeather } from '../../redux/wether/weatherActions'

export const WeatherPage = () => {
  const dispatch = useDispatch()
  const { weather, city, findStatus, revert } = useSelector((state: RootState) => state.weather)

  const [getWeatherLocation] = useGetWeatherLocationMutation()
  const [getCityGeoData] = useGetCityGeoDataMutation()

  useEffect(() => {
    // Request location permission and fetch weather data on component mount
    ;(async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        return
      }

      const location = await Location.getCurrentPositionAsync({})
      const { latitude, longitude } = location.coords
      getWeatherLocation({ lon: longitude, lat: latitude })
        .unwrap()
        .then((data: any) => {
          dispatch(setWeather(data))
          dispatch(setFindStatus(true))
        })
    })()
  }, [])

  // Handle input city name
  const handleInput = (weatherData: string) => {
    dispatch(setFindStatus(false))
    dispatch(setCity(weatherData))
  }

  // Handle form submission and fetch weather data
  const handleSubmit = () => {
    if (city) {
      getCityGeoData(city)
        .unwrap()
        .then((data: any) => {
          const { lon, lat } = data[0]

          getWeatherLocation({ lon, lat })
            .unwrap()
            .then((wetherData: any) => {
              dispatch(setWeather(wetherData))
              dispatch(setFindStatus(true))
            })
        })
        .catch(() => {
          dispatch(setFindStatus(false))
        })
    }
  }

  // Select background image based on time
  const selectBg = (time: number) => {
    const formatTime = timestampToRegularHour(time)

    if (formatTime >= 6 && formatTime <= 20) {
      return images.dark
    } else {
      return images.light
    }
  }

  // Change order of weather data
  const changeOrder = () => {
    dispatch(revertList(!revert))
  }

  return (
    <Layout>
      {Object.keys(weather).length ? (
        <ImgBg source={selectBg(weather.timezone_offset)} resizeMode={'cover'}>
          <View>
            <SearchControls
              layout={{
                marginTop: 50,
                color: 'transparent',
                jsBetween: true,
                width: 90,
                center: true,
                paddingH: 20,
              }}
              button={{
                text: 'Search',
                textColor: 'brandLight',
                borderColor: 'background3',
                bgColor: 'background1',
                onPress: handleSubmit,
              }}
              input={{
                width: 'width200',
                handleInput,
                label: { color: 'content6' },
                borderColor: 'background7',
                color: 'transparent',
              }}
            />
            {findStatus && (
              <ScrollView>
                <CustomView>
                  <WeatherItem
                    status={findStatus}
                    currentTime={weather.timezone_offset}
                    city={city}
                    {...weather.current}
                  />
                  <WeatherPredict click={changeOrder} reverce={revert} weatherData={weather.daily} />
                </CustomView>
              </ScrollView>
            )}
          </View>
        </ImgBg>
      ) : (
        <Layout>
          <Label color={'error'} title={'Loading'} />
        </Layout>
      )}
    </Layout>
  )
}

// Styled components
const CustomView = styled.View`
  margin-horizontal: 20px;
  box-sizing: border-box;
`

const Layout = styled.View`
  justify-content: center;
  align-items: center;
  flex: 1;
`

const ImgBg = styled.ImageBackground`
  flex: 1;
  width: 100%;
  height: 100%;
`
