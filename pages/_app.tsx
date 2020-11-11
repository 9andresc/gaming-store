import type { AppProps } from 'next/app'
import React, { ReactElement } from 'react'
import 'sanitize.css'

import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): ReactElement {
  return <Component {...pageProps} />
}

export default MyApp
