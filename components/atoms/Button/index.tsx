import React from 'react'
import { TouchableOpacity, TouchableOpacityProps } from 'react-native'
import styled from 'styled-components/native'
import { LabelColorType } from '../../theme/types'
import { Label } from '../Label'

interface ButtonPropsType extends TouchableOpacityProps {
  onPress: () => void
  text: string
  textColor: LabelColorType
}

export const Button = ({ onPress, text, textColor }: ButtonPropsType) => {
  return (
    <CastomButton onPress={onPress}>
      <Label userColor={textColor} title={text} />
    </CastomButton>
  )
}

const CastomButton = styled(TouchableOpacity)`
  padding-horizontal: 32px;
  padding-vertical: 8px;
  background-color: #0084ff;
  align-self: flex-start;
  border-radius: 8px;
`
