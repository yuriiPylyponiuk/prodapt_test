import { colors } from './colors'
import { sizes } from './sizes'

type ColorsType = keyof typeof colors
type SizesType = keyof typeof sizes

declare module 'styled-components/native' {
  export interface DefaultTheme {
    boxShadow: string
    colors: {
      [colorKey in ColorsType]: {
        [key in keyof (typeof colors)[colorKey]]: string
      }
    }
    sizes: {
      [sizeKey in SizesType]: { [key in keyof (typeof sizes)[sizeKey]]: number }
    }
  }
}

export type BorderColorType = keyof typeof colors.border
export type ButtonColorType = keyof typeof colors.button
export type ContainerColorType = keyof typeof colors.container
export type ContentColorType = keyof typeof colors.content
export type IconColorType = keyof typeof colors.icon
export type InputColorType = keyof typeof colors.input
export type LabelColorType = keyof typeof colors.label
export type LayoutColorType = keyof typeof colors.layout
export type MainColorType = keyof typeof colors.main
export type ModalColorType = keyof typeof colors.modal

export type ComponentColorType =
  | BorderColorType
  | ButtonColorType
  | ContainerColorType
  | ContentColorType
  | IconColorType
  | InputColorType
  | LabelColorType
  | LayoutColorType
  | MainColorType
  | ModalColorType

export type BorderRadiusSizeType = keyof typeof sizes.borderRadius
export type BorderWidthSizeType = keyof typeof sizes.borderWidth
export type ButtonSizeType = keyof typeof sizes.button
export type IconSizeType = keyof typeof sizes.icon
export type ImageSizeType = keyof typeof sizes.image
export type InputSizeType = keyof typeof sizes.input
export type LabelSizeType = keyof typeof sizes.label
export type LayoutSizeType = keyof typeof sizes.layout
export type MainSizeType = keyof typeof sizes.main

export type BorderSizesType = {
  radius?: BorderRadiusSizeType
  width?: BorderWidthSizeType
}

export type SpaceSizesType = {
  margin?: MainSizeType
  padding?: MainSizeType
}

export type ComponentSizeType =
  | BorderRadiusSizeType
  | BorderWidthSizeType
  | ButtonSizeType
  | IconSizeType
  | ImageSizeType
  | InputSizeType
  | LabelSizeType
  | LayoutSizeType
  | MainSizeType
