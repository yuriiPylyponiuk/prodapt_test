import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { API_KEY } from '../constans'

export const apiWeatherSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.openweathermap.org/`,
  }),
  endpoints: (builder) => ({
    getWeatherLocation: builder.mutation({
      query: (name) => ({
        url: `data/3.0/onecall?&exclude=hourly,minutely&appid=${API_KEY}&lon=${name.lon}&lat=${name.lat}`,
        method: 'GET',
      }),
    }),

    getCityGeoData: builder.mutation({
      query: (name) => `geo/1.0/direct?q=${name}&appid=${API_KEY}`,
    }),
  }),
})

export const { useGetWeatherLocationMutation, useGetCityGeoDataMutation } = apiWeatherSlice
