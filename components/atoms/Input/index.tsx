import { FC } from 'react'
import { TextInputProps } from 'react-native'
import styled from 'styled-components/native'

import { BorderColorType, BorderSizesType, InputColorType, InputSizeType } from '../../theme/types'
import { LabelPropsType } from '../Label'

export interface InputPropsType extends TextInputProps {
  handleInput?: (value: string) => void
  borderColor?: BorderColorType
  size?: InputSizeType
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
  width: ${({ size = 'default', theme }) => 5 * theme.sizes.input[size]}px;
  background-color: ${({ color = 'default', theme }) => theme.colors.layout[color]};
  border-color: ${({ borderColor = 'default', theme }) => theme.colors.border[borderColor]};
  border-width: ${({ border, borderSizes: { width = 'default' } = {}, theme }) =>
    border ? theme.sizes.borderWidth[width] : 0}px;
  border-radius: ${({ borderSizes: { radius = 'default' } = {}, theme }) =>
    theme.sizes.borderRadius[radius]}px;
  color: ${({ label: { color = 'default' } = {}, theme }) => theme.colors.label[color]};
`
