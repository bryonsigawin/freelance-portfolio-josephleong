import styled from 'styled-components'

export const StyledFooter = styled.footer`
  padding: 3rem 0;
`

export const FooterLink = styled.a`
  :not(:first-child)::before {
    content: '|';
    margin: 0 0.5rem;
    color: black;
  }
`
