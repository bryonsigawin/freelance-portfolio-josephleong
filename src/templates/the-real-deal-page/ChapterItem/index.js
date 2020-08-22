import React from 'react'

import Grid from '@components/Grid'
import ContentContainer from '@components/ContentContainer'

import { StyledChapterItem, Title, Subtitle, Content, ChapterLink, Image } from './styles'

const mockData = {
  title: 'Lorem ipsum dolor sit.',
  subtitlte: 'Lorem ipsum dolor sit.',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga itaque magni laudantium ea, vero voluptas! Quae et minima neque ipsa tempore dignissimos corporis, optio ipsam, harum, quaerat accusamus iusto.',
}

const ChapterItem = ({ data = mockData, permalink }) => (
  <StyledChapterItem>
    <Grid columns="1fr 0.6fr" gap="2rem" alignItems="center">
      <ContentContainer fontSize="1.1rem">
        <Subtitle>{data.subtitle}</Subtitle>
        <Title>{data.title}</Title>
        <Content dangerouslySetInnerHTML={{ __html: data.description }} />
        <ChapterLink to={permalink}>Read Journal</ChapterLink>
      </ContentContainer>

      {data.featuredImage && <Image fluid={data.featuredImage.childImageSharp.fluid} />}
    </Grid>
  </StyledChapterItem>
)

export default ChapterItem
