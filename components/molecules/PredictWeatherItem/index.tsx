import { FC } from 'react'
import styled from 'styled-components/native'

import { timestampToRegularDate } from '../../../src/helpers'
import { Icon } from '../../atoms/Icon'
import { Label } from '../../atoms/Label'
import { PredictDayType } from '../../organism/WeatherPredict'
import { IconKeyType, icons } from '../../theme'

export interface PredictWeatherItemTypes extends PredictDayType {}

export const PredictWeatherItem: FC<PredictWeatherItemTypes> = (data) => (
  <CustonView>
    <Label color={'content3'}>{`${timestampToRegularDate(data.dt)}`}</Label>
    <ImageView>
      <Icon size={'height24'} source={icons[data.weather[0].icon as IconKeyType]} />
    </ImageView>
    <Label color={'content3'} title={`${data.weather[0].main}`} />

    <Label
      color={'content3'}
      centered={'right'}
      title={`${Math.round(data.temp.day)}/${Math.round(data.temp.night)} °C`}
    />
  </CustonView>
)

const CustonView = styled.View`
  margin-top: 7px;
  display: flex;
  justify-content: space-between;
  border-bottom-color: #fff;
  border-bottom-width: 1px;
  align-items: center;
  flex-direction: row;
`
const ImageView = styled.View`
  width: 40px;
  flex-direction: row;
`
