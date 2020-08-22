import React from 'react'
import Grid from '@components/Grid'
import ContentContainer from '@components/ContentContainer'

const mockData = {
  title: 'Lorem ipsum dolor sit.',
  subtitlte: 'Lorem ipsum dolor sit.',
  description:
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione fuga itaque magni laudantium ea, vero voluptas! Quae et minima neque ipsa tempore dignissimos corporis, optio ipsam, harum, quaerat accusamus iusto.',
}

const ChapterItem = ({ data = mockData }) => (
  <Grid columns="1fr 0.6fr" gap="2rem">
    <ContentContainer fontSize="1.1rem">
      <h3>{data.subtitle}</h3>
      <h2>{data.title}</h2>
      <div dangerouslySetInnerHTML={{ __html: data.description }} />
    </ContentContainer>
    <div>image</div>
  </Grid>
)

export default ChapterItem
