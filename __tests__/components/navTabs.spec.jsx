import React from 'react'
import { ThemeProvider } from 'styled-components'
import { cleanup, render } from '@testing-library/react'

import NavTabs from '@components/navTabs'
import { theme } from '@utils/theme'

describe('<NavTabs />', () => {
  afterEach(cleanup)

  it('Highlights the correct link', () => {
    const { getByTestId } = render(
      <ThemeProvider theme={theme}>
        <NavTabs highlighted="store" />
      </ThemeProvider>
    )

    const storeLink = getByTestId('nav/links/store')
    const libraryLink = getByTestId('nav/links/library')
    const friendsLink = getByTestId('nav/links/friends')
    const accountLink = getByTestId('nav/links/account')

    expect(storeLink).toHaveStyle({ color: theme.colors.primary })
    expect(libraryLink).toHaveStyle({ color: theme.colors.white })
    expect(friendsLink).toHaveStyle({ color: theme.colors.white })
    expect(accountLink).toHaveStyle({ color: theme.colors.white })
  })
})
