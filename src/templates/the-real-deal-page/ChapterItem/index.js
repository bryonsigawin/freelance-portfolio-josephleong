import React from 'react'
import Grid from '@components/Grid'
import ContentContainer from '@components/ContentContainer'

const ChapterItem = ({ data }) => (
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
