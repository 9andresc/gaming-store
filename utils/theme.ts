const breakpoints = [600, 960, 1280]

const colors = {
  primary: '#FF8966',

  lightGrey: '#F1F1F1',
  mediumGrey: '#706C61',
  darkGrey: '#2A2B2A',

  white: '#FFFFFF'
}

const headingSizes = {
  h1: 3.5,
  h2: 2.5,
  h3: 1.5
}

const mediaQueries = {
  small: `@media (min-width: ${breakpoints[0]}px)`,
  medium: `@media (min-width: ${breakpoints[1]}px)`,
  large: `@media (min-width: ${breakpoints[2]}px)`
}

const sizes = {
  xxsmall: 0.25,
  xsmall: 0.5,
  small: 0.75,
  medium: 1,
  large: 1.5,
  xlarge: 2.5,
  xxlarge: 3.5
}

const spacing = {
  ...sizes,
  auto: 'auto',
  none: 0
}

const textSizes = {
  small: 0.75,
  medium: 1,
  large: 1.5
}

export type Theme = {
  breakpoints: Array<number>

  colors: {
    primary: string

    lightGrey: string
    mediumGrey: string
    darkGrey: string

    white: string
  }

  headingSizes: {
    h1: number
    h2: number
    h3: number
  }

  mediaQueries: {
    small: string
    medium: string
    large: string
  }

  sizes: {
    xxsmall: number
    xsmall: number
    small: number
    medium: number
    large: number
    xlarge: number
    xxlarge: number
  }

  spacing: {
    xxsmall: number
    xsmall: number
    small: number
    medium: number
    large: number
    xlarge: number
    xxlarge: number
    auto: string
    none: number
  }

  textSizes: {
    small: number
    medium: number
    large: number
  }

  unit: string
}

export const theme: Theme = {
  breakpoints,
  colors,
  headingSizes,
  mediaQueries,
  sizes,
  spacing,
  textSizes,
  unit: 'rem'
}
