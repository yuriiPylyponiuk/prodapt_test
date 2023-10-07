import { fireEvent, render } from '@testing-library/react-native'
import React from 'react'

import { Button } from '.'

describe('Button Component', () => {
  it('renders button with text correctly', () => {
    const { getByText } = render(<Button text={'Click me'} />)
    const buttonText = getByText('Click me')
    expect(buttonText).toBeTruthy()
  })

  it('calls onPress handler when clicked', () => {
    const onPressMock = jest.fn()
    const { getByText } = render(<Button text={'Click me'} onPress={onPressMock} />)
    const button = getByText('Click me')
    fireEvent.press(button)
    expect(onPressMock).toHaveBeenCalled()
  })

  it('renders button with icon correctly', () => {
    const iconProps = { name: 'star', size: 20, color: 'blue' }
    const { getByTestId } = render(<Button icon={iconProps} />)
    const icon = getByTestId('icon')
    expect(icon).toBeTruthy()
  })

  it('renders button with custom styles correctly', () => {
    const { getByTestId } = render(
      <Button
        text={'Custom Button'}
        pWidth={50}
        pHeight={20}
        bgColor={'primary'}
        borderColor={'secondary'}
        textColor={'white'}
      />,
    )
    const button = getByTestId('custom-button')
    expect(button).toHaveStyle({
      paddingHorizontal: 50,
      paddingVertical: 20,
      backgroundColor: 'background1',
      borderColor: 'brand1',
      color: 'content1',
    })
  })
})
