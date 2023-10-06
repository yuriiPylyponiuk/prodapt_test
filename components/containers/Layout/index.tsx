import React, { FC } from 'react'
import { ViewProps } from 'react-native'
import styled from 'styled-components/native'

import { BorderColorType, BorderSizesType, LayoutColorType, LayoutSizeType } from '../../theme/types'

export interface LayoutPropsType extends ViewProps {
  border?: boolean
  borderColor?: BorderColorType
  borderSizes?: BorderSizesType
  color?: LayoutColorType
  size?: LayoutSizeType
  center?: boolean
}

export const Layout: FC<LayoutPropsType> = ({ ...props }) => <Default {...props} />
Layout.displayName = 'Layout'

const Default = styled.View<LayoutPropsType>`
  justify-content: ${({ center }) => (center ? 'space-between' : '')};
  flex-direction: ${({ center }) => (center ? 'row' : '')};
  align-self: stretch;
  height: ${({ size, theme }) => (size ? `${theme.sizes.layout[size]}px` : 'auto')};
  background-color: ${({ color = 'default', theme }) => theme.colors.layout[color]};
  border-color: ${({ borderColor = 'default', theme }) => theme.colors.border[borderColor]};
  border-width: ${({ border, borderSizes: { width = 'default' } = {}, theme }) =>
    border ? theme.sizes.borderWidth[width] : 0}px;
  border-radius: ${({ borderSizes: { radius = 'default' } = {}, theme }) =>
    theme.sizes.borderRadius[radius]}px;
  overflow: hidden;
`
