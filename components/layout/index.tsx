import { useRouter } from 'next/router'
import React, { ReactElement } from 'react'
import styled from 'styled-components'

import NavTabs from '@components/navTabs'

import Footer from './footer'

const Container = styled.div({
  position: 'relative',

  display: 'flex',
  flexDirection: 'column',

  minHeight: '100vh',
  paddingBottom: '4rem',
  width: '100%'
})

const NavTabsWrapper = styled.div({
  bottom: '0',
  left: '0',
  position: 'fixed',
  zIndex: 1,

  width: '100%'
})

const Main = styled.main({
  flex: 1,

  width: '100%'
})

const routes = {
  '/': 'store',
  '/library': 'library',
  '/friends': 'friends',
  '/account': 'account'
}

type Props = {
  children: React.ReactNode
}

function Layout({ children }: Props): ReactElement {
  const { asPath } = useRouter()
  const currentPath = asPath.split('?')[0]

  return (
    <Container>
      <NavTabsWrapper>
        <NavTabs highlighted={routes[currentPath]} />
      </NavTabsWrapper>

      <header role="banner" />

      <Main role="main">{children}</Main>

      <Footer />
    </Container>
  )
}

export default Layout
