import React from 'react'

import ContentContainer from '@components/ContentContainer'

import { StyledChapterItem, Title, Subtitle, Content, ChapterLink, Image } from './styles'

const mockData = {
  title: 'Lorem ipsum dolor sit.',
  subtitle: 'Lorem ipsum dolor sit.',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga itaque magni laudantium ea, vero voluptas! Quae et minima neque ipsa tempore dignissimos corporis, optio ipsam, harum, quaerat accusamus iusto.',
}

const ChapterItem = ({ data, permalink }) => (
  <StyledChapterItem>
    <ContentContainer fontSize="1.1rem">
      <Subtitle>{data.subtitle || mockData.subtitle}</Subtitle>
      <Title>{data.title || mockData.subtitle}</Title>
      <Content dangerouslySetInnerHTML={{ __html: data.description || mockData.description }} />
      <ChapterLink to={permalink}>Read Journal</ChapterLink>
    </ContentContainer>

    {data.featuredImage && <Image fluid={data.featuredImage.childImageSharp.fluid} />}
  </StyledChapterItem>
)

export default ChapterItem
