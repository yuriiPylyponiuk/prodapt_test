import { render } from '@testing-library/react-native'
import React from 'react'

import { Label } from './'

describe('Label Component', () => {
  it('renders label correctly', () => {
    const { getByText } = render(<Label title={'Hello, World!'} />)
    const label = getByText('Hello, World!')
    expect(label).toBeTruthy()
  })

  it('applies custom styles correctly', () => {
    const { getByText } = render(
      <Label size={'large'} width={'medium'} color={'primary'} bold underline uppercase>
        {'Custom Label'}
      </Label>,
    )
    const label = getByText('Custom Label')
    expect(label).toHaveStyle({
      fontSize: 20,
      width: '200px',
      color: 'primary',
      fontWeight: 'bold',
      textDecorationLine: 'underline',
      textTransform: 'uppercase',
    })
  })

  it('renders children when provided', () => {
    const { getByText } = render(<Label>{'Children Text'}</Label>)
    const label = getByText('Children Text')
    expect(label).toBeTruthy()
  })
})
