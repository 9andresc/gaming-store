import React, { ReactElement } from 'react'
import styled from 'styled-components'

import { GitHubIcon, JAMStackIcon } from '@components/icons/tech'
import Link from '@components/link'
import Text from '@components/text'
import { theme } from '@utils/theme'

const Wrapper = styled.footer(({ theme }) => ({
  height: '4rem',
  padding: '0 1rem',
  width: '100%',

  backgroundColor: theme.colors.lightGrey
}))

const Container = styled.div({
  alignItems: 'center',
  display: 'flex',
  justifyContent: 'space-between',

  height: '100%'
})

const BuiltWithContainer = styled.div({
  alignItems: 'center',
  display: 'flex'
})

const builtWithTextStyles = {
  marginRight: '0.25rem'
}

function Footer(): ReactElement {
  return (
    <Wrapper role="contentinfo">
      <Container>
        <BuiltWithContainer>
          <Text styles={builtWithTextStyles}>
            Built with &#128151;, &#127865;, and
          </Text>
          <JAMStackIcon size="xxlarge" />
        </BuiltWithContainer>

        <Link
          href="https://github.com/9andresc/gaming-store"
          rel="noopener"
          target="_blank"
          useNext={false}
        >
          <GitHubIcon color={theme.colors.mediumGrey} size="large" />
        </Link>
      </Container>
    </Wrapper>
  )
}

export default Footer
