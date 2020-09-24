import React from 'react'
import { TheRealDealPageTemplate } from '../../templates/the-real-deal-page'
import { ThemeProvider } from 'styled-components'

import Layout from '@components/Layout'
import DefaultStyles from '@styles/defaults'

const TheRealDealPreview = ({ entry, widgetFor }) => {
  const entryChapters = entry.getIn(['data', 'chapters'])
  const chaptersContent = entryChapters.toJS().map((entry) => ({
    node: { frontmatter: { title: entry.title } },
  }))

  return (
    <ThemeProvider theme={{ primaryColor: 'red' }}>
      <Layout>
        <DefaultStyles />

        <TheRealDealPageTemplate
          content={widgetFor('body')}
          theRealDealContent={{ edges: chaptersContent }}
        />
      </Layout>
    </ThemeProvider>
  )
}

export default TheRealDealPreview
