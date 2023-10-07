import React, { FC } from 'react'
import { TextProps } from 'react-native'
import styled from 'styled-components/native'

import { LabelColorType, LabelSizeType, MainSizeType } from '../../theme/types'

export interface LabelPropsType extends TextProps {
  bold?: boolean
  centered?: string
  color?: LabelColorType
  letterSpacing?: number
  medium?: boolean
  size?: LabelSizeType
  width?: MainSizeType
  title?: string
  underline?: boolean
  uppercase?: boolean
}

export const Label: FC<LabelPropsType> = ({ children, title = '', ...props }) => (
  // @ts-ignore: tmp until styled types updates to RN 0.66.3
  <Default {...props}>{children || title}</Default>
)
Label.displayName = 'Label'

const Default = styled.Text<LabelPropsType>`
  color: ${({ color = 'default', theme }) => theme.colors.label[color]};
  font-size: ${({ size = 'default', theme }) => theme.sizes.label[size]}px;
  width: ${({ width, theme }) => (width ? theme.sizes.main[width] + 'px' : 'auto')};
  font-weight: ${({ bold, medium }) => (bold ? 700 : medium ? 500 : 400)};
  letter-spacing: ${({ letterSpacing }) => letterSpacing || 0}px;
  text-align: ${({ centered }) => (centered ? centered : 'left')};
  text-decoration-line: ${({ underline }) => (underline ? 'underline' : 'none')};
  text-transform: ${({ uppercase }) => (uppercase ? 'uppercase' : 'none')};
`
