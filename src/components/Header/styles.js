import styled from 'styled-components'
import { Link } from 'gatsby'

export const StyledHeader = styled.header`
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 0;
  width: 100%;

  padding: 2rem 0;
  background: white;
`

export const HeaderLink = styled(Link)`
  margin: 0 1rem;
`
