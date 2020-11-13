import React, { ReactElement, ReactNode } from 'react'
import styled, { CSSProperties } from 'styled-components'

import { theme } from '@utils/theme'

type WrapperProps = {
  height: number | Array<number>
  styles?: CSSProperties
  width: number | Array<number>
}

const Wrapper = styled.div<WrapperProps>(({ height, styles, width }) => {
  if (typeof height === 'number' && typeof width === 'number') {
    return {
      position: 'relative',

      height: height + 'rem',
      width: width + 'rem',
      ...styles
    }
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const rules: any = {
    position: 'relative',

    height: height[0] + 'rem',
    width: width[0] + 'rem',
    ...styles
  }
  if (height[1] && width[1]) {
    rules[theme.mediaQueries.small] = {
      ...rules[theme.mediaQueries.small],
      height: height[1] + 'rem',
      width: width[1] + 'rem'
    }
  }
  if (height[2] && width[2]) {
    rules[theme.mediaQueries.medium] = {
      ...rules[theme.mediaQueries.medium],
      height: height[2] + 'rem',
      width: width[2] + 'rem'
    }
  }
  if (height[3] && width[3]) {
    rules[theme.mediaQueries.large] = {
      ...rules[theme.mediaQueries.large],
      height: height[3] + 'rem',
      width: width[3] + 'rem'
    }
  }

  return rules
})

const SVG = styled.svg({
  bottom: '0',
  left: '0',
  position: 'absolute',
  right: '0',
  top: '0',

  width: '100%',
  height: '100%'
})

type ContainerProps = {
  children: ReactNode
  ratio: number
  size: keyof typeof theme.sizes | Array<keyof typeof theme.sizes>
  styles?: CSSProperties
  title: string
  titleId: string
  viewBox: string
}

export function Container({
  children,
  ratio,
  size,
  styles,
  title,
  titleId,
  viewBox
}: ContainerProps): ReactElement {
  let height: number | Array<number>
  let width: number | Array<number>
  if (typeof size === 'string') {
    height = theme.sizes[size]
    width = height * ratio
  } else {
    const mobileSize = size[0]
    const smallSize = size[1]
    const mediumSize = size[2]
    const largeSize = size[3]

    if (mobileSize && !smallSize && !mediumSize && !largeSize) {
      height = [theme.sizes[mobileSize]]
      width = [height[0] * ratio]
    }
    if (mobileSize && smallSize && !mediumSize && !largeSize) {
      height = [theme.sizes[mobileSize], theme.sizes[smallSize]]
      width = [height[0] * ratio, height[1] * ratio]
    } else if (mobileSize && smallSize && mediumSize && !largeSize) {
      height = [
        theme.sizes[mobileSize],
        theme.sizes[smallSize],
        theme.sizes[mediumSize]
      ]
      width = [height[0] * ratio, height[1] * ratio, height[2] * ratio]
    } else {
      height = [
        theme.sizes[mobileSize],
        theme.sizes[smallSize],
        theme.sizes[mediumSize],
        theme.sizes[largeSize]
      ]
      width = [
        height[0] * ratio,
        height[1] * ratio,
        height[2] * ratio,
        height[3] * ratio
      ]
    }
  }

  return (
    <Wrapper height={height} styles={styles} width={width}>
      <SVG
        aria-labelledby={titleId}
        fill="none"
        role="img"
        viewBox={viewBox}
        xmlns="http://www.w3.org/2000/svg"
      >
        <title id={titleId}>{title}</title>
        {children}
      </SVG>
    </Wrapper>
  )
}

export type IconProps = {
  color?: string
  size?: keyof typeof theme.sizes | Array<keyof typeof theme.sizes>
  styles?: CSSProperties
  title?: string
  titleId?: string
}
