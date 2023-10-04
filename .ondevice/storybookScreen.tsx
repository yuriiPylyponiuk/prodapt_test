import React, { FC } from 'react'
import { ThemeProvider } from 'styled-components/native'
import StorybookUIRoot from '.'
import { theme } from '../components/theme'

const StorybookScreen: FC = () => (
  <ThemeProvider theme={theme}>
    <StorybookUIRoot />
  </ThemeProvider>
)
StorybookScreen.displayName = 'StorybookScreen'

export default StorybookScreen
