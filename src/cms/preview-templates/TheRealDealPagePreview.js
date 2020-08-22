import React from 'react'
import { TheRealDealPageTemplate } from '../../templates/the-real-deal-page'
import { ThemeProvider } from 'styled-components'

const TheRealDealPreview = ({ entry, widgetFor }) => {
  const entryChapters = entry.getIn(['data', 'chapters'])
  const chaptersContent = entryChapters.toJS().map((entry) => ({
    node: { frontmatter: { title: entry.title } },
  }))

  return (
    <ThemeProvider theme={{ primaryColor: 'red' }}>
      <TheRealDealPageTemplate content={widgetFor('body')} theRealDealPosts={chaptersContent} />
    </ThemeProvider>
  )
}

export default TheRealDealPreview
