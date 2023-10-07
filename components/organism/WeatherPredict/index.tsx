import React, { FC, useEffect, useState } from 'react'
import { FlatList } from 'react-native'
import uuid from 'react-native-uuid'
import styled from 'styled-components/native'

import { Button } from '../../atoms/Button'
import { Label } from '../../atoms/Label'
import { PredictWeatherItem } from '../../molecules/PredictWeatherItem'
import { icons } from '../../theme'

export interface PredictDayType {
  dt: number
  sunrise: number
  sunset: number
  moonrise: number
  moonset: number
  moon_phase: number
  summary: string
  temp: {
    day: number
    min: number
    max: number
    night: number
    eve: number
    morn: number
  }
  feels_like: {
    day: number
    night: number
    eve: number
    morn: number
  }
  pressure: number
  humidity: number
  dew_point: number
  wind_speed: number
  wind_deg: number
  wind_gust: number
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    },
  ]
  clouds: number
  pop: number
  rain: number
  uvi: number
}

export type WeatherTypes = { weatherData: PredictDayType[]; reverce: boolean; click: () => void }

export const WeatherPredict: FC<WeatherTypes> = ({ weatherData, reverce, click }) => {
  const [list, setList] = useState(weatherData)

  useEffect(() => {
    const newList = [...list]
    if (reverce) {
      setList(newList.reverse())
    }
  }, [])

  return (
    <CustomView>
      <SubView>
        <Label title={'Forecast'} color={'content1'} size={'height30'} />
        {reverce ? (
          <Button
            onPress={click}
            borderColor={'transparent'}
            icon={{ rotate: 90, size: 'height24', source: icons.back }}
          />
        ) : (
          <Button
            onPress={click}
            borderColor={'transparent'}
            icon={{ rotate: 270, size: 'height24', source: icons.back }}
          />
        )}
      </SubView>
      <FlatList
        data={list}
        renderItem={({ item }) => <PredictWeatherItem {...item} />}
        keyExtractor={() => `${uuid.v4()}`}
      />
    </CustomView>
  )
}

const SubView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const CustomView = styled.ScrollView`
  background-color: #033f266e;
  border-radius: 10px;
  padding: 20px;
`
