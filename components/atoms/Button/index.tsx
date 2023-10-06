import React from 'react'
import { TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'

import { ButtonColorType, LabelColorType } from '../../theme/types'
import { Label } from '../Label'

export interface ButtonPropsType extends TouchableOpacityProps {
  onPress?: () => void
  text: string
  textColor: LabelColorType
  pWidth?: number
  pHeight?: number
  bgColor?: ButtonColorType
}

export const Button = ({ onPress = () => {}, text, textColor, ...props }: ButtonPropsType) => (
  <CastomButton {...props} onPress={onPress}>
    <Label color={textColor} title={text} />
  </CastomButton>
)

const CastomButton = styled.TouchableOpacity<ButtonPropsType>`
  padding-horizontal: ${({ pWidth }) => (pWidth ? pWidth : 32)}px;
  padding-vertical: ${({ pHeight }) => (pHeight ? pHeight : 13)}px;
  background-color: ${({ bgColor, theme }) => (bgColor ? theme.colors.button[bgColor] : 'brandLight')};
  align-self: flex-start;
  border-radius: 8px;
`
