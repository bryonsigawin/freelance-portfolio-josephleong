import React, { forwardRef } from 'react'
import { Link } from 'gatsby'

import { StyledHeader, HeaderLink } from './styles'

import Container from '@components/Container'
import Grid from '@components/Grid'

const Header = forwardRef((props, ref) => (
  <StyledHeader ref={ref}>
    <Container>
      <Grid justifyContent="space-between" columns="auto auto">
        <div>
          <Link to="/">LOGO</Link>
        </div>
        <div>
          <HeaderLink to="/the-real-deal">THE REAL DEAL</HeaderLink>
          <HeaderLink to="/about">ABOUT</HeaderLink>
        </div>
      </Grid>
    </Container>
  </StyledHeader>
))

export default Header
