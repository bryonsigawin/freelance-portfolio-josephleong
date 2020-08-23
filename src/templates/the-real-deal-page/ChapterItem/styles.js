import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'
import { devicesMax, devicesMin } from '@styles/breakpoints'

export const StyledChapterItem = styled.div`
  display: flex;
  flex-direction: column-reverse;
  color: white;

  @media ${devicesMin.tablet.sm} {
    display: grid;
    grid-template-columns: 1fr 0.6fr;
    align-items: center;
    gap: 2rem;
  }
`

export const Title = styled.h2`
  font-weight: bold;
  margin: 0;
  margin-bottom: 0.5rem;
`

export const Subtitle = styled.h4`
  margin: 0;
`

export const Content = styled.div`
  color: #ffa2a2;
  margin-bottom: 2rem;
`

export const ChapterLink = styled(Link)`
  text-decoration: underline;
  color: white !important;
`

export const Image = styled(Img)`
  background: lightgrey;
  max-height: 300px;

  @media ${devicesMax.tablet.sm} {
    margin-bottom: 1rem;
  }
`
