import type { AppProps } from 'next/app'
import React, { ReactElement } from 'react'
import 'sanitize.css'
import { ThemeProvider } from 'styled-components'

import Layout from '@components/layout'
import '@styles/globals.css'
import { theme } from '@utils/theme'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  )
}

export default MyApp
