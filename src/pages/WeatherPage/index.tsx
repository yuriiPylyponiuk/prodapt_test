import * as Location from 'expo-location'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components/native'

import { Label } from '../../../components/atoms/Label'
import { RootState } from '../../redux/configureStore'

export const WeatherPage = () => {
  const dispatch = useDispatch()
  const weather = useSelector((state: RootState) => state.wether)

  useEffect(() => {
    ;(async () => {
      const { status } = await Location.requestForegroundPermissionsAsync()
      if (status !== 'granted') {
        return
      }

      const location = await Location.getCurrentPositionAsync({})
      const { latitude, longitude } = location.coords
      console.log(latitude)
      console.log(longitude)
    })()
  }, [])

  return (
    <Layout>
      <Label title={'pla'} userColor={'error'} />
    </Layout>
  )
}

const Layout = styled.View`
  flex: 1;
  background-color: #fff;
  align-items: center;
  justify-content: center;
`
