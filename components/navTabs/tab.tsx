import React, { ReactElement } from 'react'
import styled from 'styled-components'

import Link from '@components/link'
import { theme } from '@utils/theme'

const Wrapper = styled.li(() => ({
  alignItems: 'center',
  display: 'flex',
  flex: '1',
  justifyContent: 'center',

  '&::before': {
    display: 'none'
  }
}))

const linkStyles = {
  alignItems: 'center',
  display: 'flex',
  flexDirection: 'column' as const,
  justifyContent: 'center',

  textDecoration: 'none'
}

type Props = {
  icon?: ReactElement
  isHighlighted?: boolean
  label: string
  testId?: string
  url?: string
}

function Tab({
  icon,
  isHighlighted = false,
  label,
  testId,
  url = '/'
}: Props): ReactElement {
  return (
    <Wrapper>
      <Link
        color={isHighlighted ? theme.colors.primary : theme.colors.white}
        href={url}
        size="small"
        styles={linkStyles}
        testId={testId}
      >
        {icon}
        {label}
      </Link>
    </Wrapper>
  )
}

export default Tab
