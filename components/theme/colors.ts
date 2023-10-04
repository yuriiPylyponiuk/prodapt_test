const main = {
  // backgrounds
  background1: '#1f1e1e',
  background2: '#0e0e0e',
  background3: '#292929',
  background4: '#383838',
  background5: '#595755',
  background6: '#b4ada2',
  background7: '#181818',
  background8: 'black',
  backgroundDisabled: '#292929',
  backgroundInverse: '#ffffff',
  backgroundTransparent: 'transparent',

  // brand
  brand1: '#f18303',
  brandInverse: '#ffffff',
  brandLight: '#fbead9',

  // blur
  black15: '#00000015',
  black33: '#00000033',
  black99: '#00000099',
  white66: '#ffffff66',

  // content
  content1: '#f2f0ef',
  content2: '#ffffff',
  content3: '#cdcdcd',
  content4: '#b4ada2',
  content5: '#62636c',
  content6: '#595755',
  content7: '#c5b5ae',
  contentDisabled: '#5f5f5f',
  contentInverse: '#1f1e1e',

  // other
  error: '#ff4e4e',
  success: '#53d769',
}

const container = {
  default: main.background1,
  background1: main.background1,
  background2: main.background2,
  background7: main.background7,
  inverse: main.backgroundInverse,
}

const content = {
  default: main.content1,
  brand1: main.brand1,
  brandInverse: main.brandInverse,
  brandLight: main.brandLight,
  content1: main.content1,
  content2: main.content2,
  content3: main.content3,
  content4: main.content4,
  content5: main.content5,
  content6: main.content6,
  content7: main.content7,
  disabled: main.contentDisabled,
  error: main.error,
  inverse: main.contentInverse,
  placeholder: main.contentDisabled,
  success: main.success,
}

const layout = {
  default: main.background2,
  background1: main.background1,
  background2: main.background2,
  background3: main.background3,
  background4: main.background4,
  background5: main.background5,
  background6: main.background6,
  background7: main.background7,
  blur: main.black99,
  brand1: main.brand1,
  brandLight: main.brandLight,
  disabled: main.backgroundDisabled,
  error: main.error,
  inverse: main.backgroundInverse,
  success: main.success,
  transparent: main.backgroundTransparent,
}

const border = {
  ...layout,
  default: main.background6,
  disabled: main.backgroundDisabled,
}

const button = {
  ...layout,
  default: main.backgroundTransparent,
}

const icon = { ...content }

const input = {
  ...layout,
  default: main.background2,
}

const label = { ...content }

const modal = { ...layout }

export const colors = {
  main,
  border,
  button,
  container,
  content,
  icon,
  input,
  label,
  layout,
  modal,
}
