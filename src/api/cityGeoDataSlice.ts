import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

import { API_KEY } from '../constans'

export const apiCityGeoDataSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://api.openweathermap.org/data/3.0/`,
  }),
  endpoints: (builder) => ({
    getCityGeoData: builder.mutation({
      query: (name) => `onecall?&exclude=hourly,minutely&appid=${API_KEY}&q=${name}`,
    }),
  }),
})

export const { useGetCityGeoDataMutation } = apiCityGeoDataSlice
