import { combineReducers, configureStore } from '@reduxjs/toolkit'

import weatherReducer from './wether/weatherReducer'
import { apiWeatherSlice } from '../api/weatherSlice'

const rootReducer = combineReducers({
  weather: weatherReducer,
  [apiWeatherSlice.reducerPath]: apiWeatherSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(apiWeatherSlice.middleware),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
