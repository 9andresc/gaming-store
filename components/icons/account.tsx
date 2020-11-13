import React, { ReactElement } from 'react'

import { theme } from '@utils/theme'

import { Container, IconProps } from './common'

export function Account({
  color = theme.colors.darkGrey,
  size = 'medium',
  styles,
  title = 'Account icon',
  titleId = 'account'
}: IconProps): ReactElement {
  return (
    <Container
      ratio={1}
      size={size}
      styles={styles}
      title={title}
      titleId={titleId}
      viewBox="0 0 64 64"
    >
      <path
        d="M32 43.25C39.5939 43.25 45.75 37.0939 45.75 29.5C45.75 21.9061 39.5939 15.75 32 15.75C24.4061 15.75 18.25 21.9061 18.25 29.5C18.25 37.0939 24.4061 43.25 32 43.25Z"
        fill={color}
      />
      <path
        d="M57 2H7C5.67438 2.00152 4.40349 2.52879 3.46614 3.46614C2.52879 4.40349 2.00152 5.67438 2 7V57C2.00152 58.3256 2.52879 59.5965 3.46614 60.5339C4.40349 61.4712 5.67438 61.9985 7 62H57C58.3256 61.9985 59.5965 61.4712 60.5339 60.5339C61.4712 59.5965 61.9985 58.3256 62 57V7C61.9985 5.67438 61.4712 4.40349 60.5339 3.46614C59.5965 2.52879 58.3256 2.00152 57 2ZM57 57H55.8521C54.3661 52.304 51.5333 48.1481 47.7056 45.0482C46.8162 44.3312 45.8783 43.6766 44.8986 43.089C41.4214 46.402 36.8028 48.25 32 48.25C27.1972 48.25 22.5786 46.402 19.1014 43.089C18.1216 43.6766 17.1837 44.3312 16.2944 45.0482C12.4667 48.1481 9.6339 52.304 8.14788 57H7V7H57L57.0032 56.9998L57 57Z"
        fill={color}
      />
    </Container>
  )
}
