import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'
import { ThemeProvider } from 'styled-components'

const IndexPagePreview = ({ entry, widgetFor }) => {
  const portfolioHighlights = entry.getIn(['data', 'portfolioHighlight'])

  console.log('toJS', portfolioHighlights.toJS())

  return (
    <ThemeProvider theme={{ primaryColor: 'red' }}>
      <IndexPageTemplate content={widgetFor('body')} />
    </ThemeProvider>
  )
}

export default IndexPagePreview
