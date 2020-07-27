import React from 'react'
import Grid from '@components/Grid'
import ContentContainer from '@components/ContentContainer'

const ChapterItem = ({ data }) => (
  <Grid columns="1fr 0.6fr" gap="2rem">
    <ContentContainer fontSize="1.1rem">
      <h3>Chapter 1</h3>
      <h2>Headline</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas dolor facere repellat dolorem ipsa.
        Alias assumenda praesentium, quibusdam eveniet totam accusantium optio soluta reiciendis, fuga
        mollitia, repellat dolorem unde excepturi?
      </p>
    </ContentContainer>
    <div>image</div>
  </Grid>
)

export default ChapterItem
