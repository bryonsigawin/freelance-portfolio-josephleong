import styled from 'styled-components'
import Img from 'gatsby-image'
import { Link } from 'gatsby'

export const StyledChapterItem = styled.div`
  color: white;
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
`
