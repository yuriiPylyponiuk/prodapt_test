import { combineReducers, createStore } from 'redux'
import WeatherReducer from './wether/weatherReducer'

const rootReducer = combineReducers({
  wether: WeatherReducer,
})

export const store = createStore(rootReducer)

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
