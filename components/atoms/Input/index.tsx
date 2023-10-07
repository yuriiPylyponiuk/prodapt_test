import { FC } from 'react'
import { TextInputProps } from 'react-native'
import styled from 'styled-components/native'

import { BorderColorType, BorderSizesType, InputColorType, InputSizeType, MainSizeType } from '../../theme/types'
import { LabelPropsType } from '../Label'

export interface InputPropsType extends TextInputProps {
  handleInput?: (value: string) => void
  borderColor?: BorderColorType
  size?: InputSizeType
  width?: MainSizeType
  border?: boolean
  borderSizes?: BorderSizesType
  cityName?: string
  color?: InputColorType
  label?: LabelPropsType
}

export const Input: FC<InputPropsType> = ({ handleInput = () => {}, cityName, ...props }) => (
  <SimpleInput onChangeText={handleInput} value={cityName} {...props} />
)

const SimpleInput = styled.TextInput<InputPropsType>`
  padding-horizontal: 10px;
  height: ${({ size = 'default', theme }) => theme.sizes.input[size]}px;
  width: ${({ width, theme }) => (width ? theme.sizes.main[width] + 'px' : 'auto')};
  background-color: ${({ color = 'default', theme }) => theme.colors.layout[color]};
  border: 1px solid ${({ borderColor = 'default', theme }) => theme.colors.border[borderColor]};
  border-radius: ${({ borderSizes: { radius = 'default' } = {}, theme }) => theme.sizes.borderRadius[radius]}px;
  color: ${({ label: { color = 'default' } = {}, theme }) => theme.colors.label[color]};
`
