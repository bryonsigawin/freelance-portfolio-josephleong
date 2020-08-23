import React from 'react'

import Container from '@components/Container'
import Grid from '@components/Grid'

import { StyledFooter, FooterLink } from './styles'
import { devicesMax, devicesMin } from '@styles/breakpoints'

const Footer = () => (
  <StyledFooter>
    <Container>
      <Grid
        justifyContent="space-between"
        columns={{
          [devicesMin.tablet.sm]: 'auto auto',
        }}
      >
        <div>
          <FooterLink href="/">LINKEDIN</FooterLink>
          <FooterLink href="mailto:Joseph.leong.work@gmail.com">Joseph.leong.work@gmail.com</FooterLink>
        </div>

        <div>
          <div>&copy; Joseph Leong all rights reserved.</div>
        </div>
      </Grid>
    </Container>
  </StyledFooter>
)

export default Footer
