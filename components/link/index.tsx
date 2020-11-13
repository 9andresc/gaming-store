import NextLink from 'next/link'
import React, { ReactElement } from 'react'
import styled, { CSSProperties } from 'styled-components'

import { theme } from '@utils/theme'

type StyledLinkProps = {
  color: string
  size: 'small' | 'medium' | 'large'
  styles: CSSProperties
  weight: 'normal' | 'bold'
}

const StyledLink = styled.a<StyledLinkProps>(
  ({ color, size, styles, theme, weight }) => {
    const sizeValue = theme.textSizes[size]

    return {
      margin: '0',

      color,
      fontSize: `${sizeValue}rem`,
      fontWeight: weight,
      lineHeight: `${sizeValue}rem`,
      textDecoration: 'underline',

      '&:focus': {
        outline: `1px dotted ${theme.colors.primary}`,
        outlineOffset: '2px'
      },

      ...styles
    }
  }
)

type LinkProps = {
  children: React.ReactNode
  color?: string
  download?: string
  href: string
  id?: string
  rel?: string
  size?: 'small' | 'medium' | 'large'
  styles?: CSSProperties
  target?: string
  testId?: string
  useNext?: boolean
  weight?: 'normal' | 'bold'
}

function Link({
  children,
  color = theme.colors.white,
  download,
  href,
  id,
  rel,
  size = 'medium',
  styles = {},
  target,
  testId = '',
  useNext = true,
  weight = 'normal',
  ...props
}: LinkProps): ReactElement {
  if (useNext) {
    return (
      <NextLink href={href} passHref>
        <StyledLink
          color={color}
          id={id}
          rel={rel}
          size={size}
          styles={styles}
          target={target}
          weight={weight}
          data-testid={testId}
          {...props}
        >
          {children}
        </StyledLink>
      </NextLink>
    )
  }

  return (
    <StyledLink
      color={color}
      download={download}
      href={href}
      id={id}
      rel={rel}
      size={size}
      styles={styles}
      target={target}
      weight={weight}
      data-testid={testId}
      {...props}
    >
      {children}
    </StyledLink>
  )
}

export default Link
