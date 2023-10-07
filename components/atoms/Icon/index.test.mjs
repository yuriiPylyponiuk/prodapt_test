import { render } from '@testing-library/react-native'
import React from 'react'

import { Icon } from './'

describe('Icon Component', () => {
  it('renders icon with default size and color correctly', () => {
    const { getByTestId } = render(<Icon testID={'icon'} />)
    const icon = getByTestId('icon')
    expect(icon).toBeTruthy()
  })

  it('rotates icon correctly', () => {
    const { getByTestId } = render(<Icon testID={'icon'} rotate={90} />)
    const icon = getByTestId('icon')
    expect(icon).toHaveStyle({
      transform: [{ rotate: '90deg' }],
    })
  })
})
