import { FC } from 'react'
import { View } from 'react-native'

import { timestampToRegularTime } from '../../../src/helpers'
import { Label } from '../../atoms/Label'

export interface WeatherItemProps {
  city?: string
  timezone: number
  dt: number
  sunrise: number
  sunset: number
  temp: number
  feels_like: number
  pressure: number
  humidity: number
  dew_point: number
  uvi: number
  clouds: number
  visibility: number
  wind_speed: number
  wind_deg: number
  weather: [
    {
      id: number
      main: string
      description: string
      icon: string
    },
  ]
}

export const WeatherItem: FC<WeatherItemProps> = (data) => {
  console.log(data)

  return (
    <View>
      {data.city && <Label color={'error'}>{`${data.city}`}</Label>}
      <Label color={'error'}>{`Last Update ${timestampToRegularTime(data.dt + data.timezone)}`}</Label>
      <Label color={'error'}>{`Temperatura ${data.temp}`}</Label>
      <Label color={'error'}>{`Feels like ${data.feels_like}`}</Label>
      <Label color={'error'}>{`Humidity ${data.humidity}%`}</Label>
      <Label color={'error'}>{`Pressure ${data.pressure}`}</Label>
      <Label color={'error'}>{`Clouds ${data.clouds}%`}</Label>
    </View>
  )
}
