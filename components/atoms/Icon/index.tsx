import React, { FC } from 'react'
import { ImageProps } from 'react-native'
import styled from 'styled-components/native'

import { IconColorType, IconSizeType } from '../../theme/types'

export interface IconPropsType extends ImageProps {
  color?: IconColorType
  size?: IconSizeType
  rotate?: number
}

export const Icon: FC<IconPropsType> = (props) => (
  // @ts-ignore: tmp until styled types updates to RN 0.66.3
  <DefaultIcon resizeMode={'contain'} {...props} />
)
Icon.displayName = 'Icon'

const DefaultIcon = styled.Image<IconPropsType>`
  aspect-ratio: 1;
  height: ${({ size = 'default', theme }) => theme.sizes.icon[size]}px;
  width: 100%;

  transform: ${({ rotate }) => (rotate ? 'rotate(' + rotate + 'deg)' : '')};
  tint-color: ${({ color = 'default', theme }) => theme.colors.icon[color]};
`
