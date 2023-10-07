import { FC } from 'react'
import styled from 'styled-components/native'

import { Label } from '../../atoms/Label'
import { icons } from '../../theme'

export interface WeatherItemProps {
  city?: string
  currentTime: number
  status?: boolean
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
      icon: typeof icons
    },
  ]
}

export const WeatherItem: FC<WeatherItemProps> = (data) => (
  <CustomView>
    {data.city && data.status ? (
      <TitleView>
        <Label uppercase color={'content2'} size={'height26'}>{`${data.city}`}</Label>
      </TitleView>
    ) : (
      <TitleView>
        <Label uppercase color={'content2'} size={'height26'}>
          {'Your location'}
        </Label>
      </TitleView>
    )}

    <DetailsView>
      <Label color={'content2'}>{`${Math.round(data.temp)}/${Math.round(data.feels_like)} °C`}</Label>
      <Label color={'content2'}>{`Humidity ${data.humidity}%`}</Label>
      <Label color={'content2'}>{`Pressure ${data.pressure}hPa`}</Label>
      <Label color={'content2'}>{`Clouds ${data.clouds}%`}</Label>
    </DetailsView>
  </CustomView>
)

const CustomView = styled.View`
  margin-top: 20px;
  margin-bottom: 20px;
  flex-direction: row;
  justify-content: space-between;
`

const TitleView = styled.View`
  background-color: #033f266e;
  justify-content: center;
  align-items: center;
  width: 49%;
  border-radius: 10px;
`

const DetailsView = styled.View`
  padding: 20px;
  border-radius: 10px;
  background-color: #033f266e;
  gap: 3px;
`
