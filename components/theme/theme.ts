import { DefaultTheme } from 'styled-components/native'

import { colors } from './colors'
import { sizes } from './sizes'

const { size0, size20, size10 } = sizes.main
const { black15 } = colors.main

const boxShadow = `${size0}px ${size10}px ${size20}px ${black15}`

export const theme: DefaultTheme = {
  boxShadow,
  colors,
  sizes,
}
