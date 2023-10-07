import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'

import { Input } from './Input' // Update the path accordingly

describe('Input Component', () => {
  it('renders input correctly', () => {
    const { getByPlaceholderText } = render(<Input placeholder={'Enter city'} />)
    const input = getByPlaceholderText('Enter city')
    expect(input).toBeTruthy()
  })

  it('calls handleInput when input changes', () => {
    const handleInputMock = jest.fn()
    const { getByPlaceholderText } = render(<Input placeholder={'Enter city'} handleInput={handleInputMock} />)
    const input = getByPlaceholderText('Enter city')
    fireEvent.changeText(input, 'New York')
    expect(handleInputMock).toHaveBeenCalledWith('New York')
  })

  it('applies custom styles correctly', () => {
    const { getByPlaceholderText } = render(
      <Input
        placeholder={'Enter city'}
        size={'large'}
        width={'medium'}
        border
        borderColor={'primary'}
        borderSizes={{ radius: 'small' }}
        color={'white'}
      />,
    )
    const input = getByPlaceholderText('Enter city')
    expect(input).toHaveStyle({
      height: 50,
      width: '200px',
      borderWidth: 1,
      borderColor: 'primary',
      borderRadius: 4,
      backgroundColor: 'white',
    })
  })
})
