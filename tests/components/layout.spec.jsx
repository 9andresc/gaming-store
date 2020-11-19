import React from 'react'
import { ThemeProvider } from 'styled-components'
import { cleanup, render } from '@testing-library/react'

import Layout from '@components/layout'
import { theme } from '@utils/theme'

import { mockNextUseRouter } from '../mocks/next'

describe('<Layout />', () => {
  afterEach(cleanup)

  it('Contains all the recommended landmarks', async () => {
    await mockNextUseRouter({
      asPath: `/`
    })

    const { container } = render(
      <ThemeProvider theme={theme}>
        <Layout />
      </ThemeProvider>
    )
    const header = container.querySelector('header')
    const nav = container.querySelector('nav')
    const main = container.querySelector('main')
    const footer = container.querySelector('footer')

    expect(header).toHaveAttribute('role', 'banner')
    expect(nav).toHaveAttribute('role', 'navigation')
    expect(main).toHaveAttribute('role', 'main')
    expect(footer).toHaveAttribute('role', 'contentinfo')
  })
})
