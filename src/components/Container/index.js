import styled from 'styled-components'
import { devicesMin } from '@styles/breakpoints'

const Container = styled.div`
  position: relative;
  width: 100%;

  margin: 0 auto;
  padding: 0 1.5rem;

  @media ${devicesMin.tablet.sm} {
    max-width: 720px;
  }

  @media ${devicesMin.tablet.lg} {
    max-width: 960px;
  }

  @media ${devicesMin.desktop.sm} {
    max-width: 1200px;
  }

  @media ${devicesMin.desktop.lg} {
    max-width: 1440px;
  }
`

export default Container
