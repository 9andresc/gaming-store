import React, { ReactElement } from 'react'
import styled, { CSSProperties } from 'styled-components'

import { theme } from '@utils/theme'

type StyledTextProps = {
  align?: 'left' | 'center' | 'right'
  color?: keyof typeof theme.colors
  size?: 'small' | 'medium' | 'large'
  styles?: CSSProperties
  weight?: 'normal' | 'bold'
}

const StyledText = styled.p<StyledTextProps>(
  ({ align, color, size, styles, theme, weight }) => {
    const sizeValue = theme.textSizes[size]

    return {
      margin: '0',

      color: theme.colors[color],
      fontSize: `${sizeValue}${theme.unit}`,
      fontWeight: weight,
      lineHeight: `${sizeValue}${theme.unit}`,
      textAlign: align,
      ...styles
    }
  }
)

type TextProps = {
  children?: React.ReactNode
  id?: string
} & StyledTextProps

function Text({
  align = 'left',
  children,
  color = 'darkGrey',
  id,
  size = 'medium',
  styles,
  weight = 'normal'
}: TextProps): ReactElement {
  return (
    <StyledText
      align={align}
      color={color}
      id={id}
      size={size}
      styles={styles}
      weight={weight}
    >
      {children}
    </StyledText>
  )
}

export default Text
