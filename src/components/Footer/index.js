import React from 'react'

import Container from '@components/Container'
import Grid from '@components/Grid'

import { StyledFooter } from './styles'

const Footer = () => (
  <StyledFooter>
    <Container>
      <Grid justifyContent="space-between" columns="auto auto">
        <div>
          <a href="/">LINKEDIN</a>
          <a href="/">Joseph.leong.work@gmail.com</a>
        </div>

        <div>
          <p>&copy; Joseph Leong all rights reserved.</p>
        </div>
      </Grid>
    </Container>
  </StyledFooter>
)

export default Footer
