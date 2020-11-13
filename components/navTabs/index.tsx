import React, { ReactElement, useMemo } from 'react'
import styled from 'styled-components'

import {
  AccountIcon,
  FriendsIcon,
  LibraryIcon,
  StoreIcon
} from '@components/icons'
import { theme } from '@utils/theme'

import Tab from './tab'

const Wrapper = styled.nav.attrs({
  role: 'navigation',
  'aria-label': 'Navigation Tabs'
})(({ theme }) => ({
  height: '4rem',
  padding: '0.5rem 2rem',
  width: '100%',

  backgroundColor: theme.colors.darkGrey
}))

const Container = styled.ul({
  display: 'flex',
  justifyContent: 'space-between',

  height: '100%',
  margin: 0,
  padding: 0,
  width: '100%'
})

const iconStyles = {
  marginBottom: '0.5rem'
}

function computeTabs(highlighted: string) {
  const tabs = [
    {
      icon: (
        <StoreIcon
          color={
            highlighted === 'store' ? theme.colors.primary : theme.colors.white
          }
          size="medium"
          styles={iconStyles}
        />
      ),
      isHighlighted: highlighted === 'store',
      label: 'Store',
      testId: 'nav/links/store',
      url: '/'
    },
    {
      icon: (
        <LibraryIcon
          color={
            highlighted === 'library'
              ? theme.colors.primary
              : theme.colors.white
          }
          size="medium"
          styles={iconStyles}
        />
      ),
      isHighlighted: highlighted === 'library',
      label: 'Library',
      testId: 'nav/links/library',
      url: '/library'
    },
    {
      icon: (
        <FriendsIcon
          color={
            highlighted === 'friends'
              ? theme.colors.primary
              : theme.colors.white
          }
          size="medium"
          styles={iconStyles}
        />
      ),
      isHighlighted: highlighted === 'friends',
      label: 'Friends',
      testId: 'nav/links/friends',
      url: '/friends'
    },
    {
      icon: (
        <AccountIcon
          color={
            highlighted === 'account'
              ? theme.colors.primary
              : theme.colors.white
          }
          size="medium"
          styles={iconStyles}
        />
      ),
      isHighlighted: highlighted === 'account',
      label: 'Account',
      testId: 'nav/links/account',
      url: '/account'
    }
  ]

  return tabs
}

type Props = {
  highlighted?: 'store' | 'library' | 'friends' | 'account'
}

function NavTabs({ highlighted }: Props): ReactElement {
  const tabs = useMemo(() => computeTabs(highlighted), [highlighted])

  return (
    <Wrapper>
      <Container>
        {tabs.map((tab) => (
          <Tab key={tab.label} {...tab} />
        ))}
      </Container>
    </Wrapper>
  )
}

export default NavTabs
