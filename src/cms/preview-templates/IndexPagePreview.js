import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'
import { ThemeProvider } from 'styled-components'

const IndexPagePreview = ({ entry, widgetFor }) => {
  const entryPortfolio = entry.getIn(['data', 'portfolioHighlight'])
  const portfolioContent = entryPortfolio.toJS().map((entry) => ({
    node: { frontmatter: { title: entry.portfolioName } },
  }))

  return (
    <ThemeProvider theme={{ primaryColor: 'red' }}>
      <IndexPageTemplate content={widgetFor('body')} portfolioContent={{ edges: portfolioContent }} />
    </ThemeProvider>
  )
}

export default IndexPagePreview
