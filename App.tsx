import Constants from 'expo-constants'
import { Provider } from 'react-redux'
import { ThemeProvider } from 'styled-components/native'
import { theme } from './components/theme'
import { WeatherPage } from './src/pages/WeatherPage'
import { store } from './src/redux/configureStore'

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        {Constants.expoConfig?.extra?.storybookEnabled ? (
          (AppEntryPoint = require('./.ondevice/storybookScreen').default)
        ) : (
          <WeatherPage />
        )}
      </ThemeProvider>
    </Provider>
  )
}

let AppEntryPoint = App

if (Constants.expoConfig?.extra?.storybookEnabled === 'true') {
  AppEntryPoint = require('./.ondevice/storybookScreen').default
}

export default AppEntryPoint
