import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'
import { ThemeProvider } from 'styled-components'

import Layout from '@components/Layout'
import DefaultStyles from '@styles/defaults'

const IndexPagePreview = ({ entry, widgetFor }) => {
  const entryPortfolio = entry.getIn(['data', 'portfolioHighlight'])
  const portfolioContent = entryPortfolio.toJS().map((entry) => ({
    node: { frontmatter: { title: entry.title, featuredImage: '', tags: [] } },
  }))

  return (
    <ThemeProvider theme={{ primaryColor: 'red' }}>
      <Layout>
        <DefaultStyles />

        <IndexPageTemplate content={widgetFor('body')} portfolioContent={{ edges: portfolioContent }} />
      </Layout>
    </ThemeProvider>
  )
}

export default IndexPagePreview
