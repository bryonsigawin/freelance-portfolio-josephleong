import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'
import { ThemeProvider } from 'styled-components'

import Layout from '@components/Layout'
import DefaultStyles from '@styles/defaults'

const mockBodyContent = () => (
  <div>
    <h1>Lorem Ipsum Dolor Sit Amet.</h1>
    lorem ipsum dolor site amet,
    <p></p>
  </div>
)

const PortfolioPostPreview = ({ entry, getAsset }) => {
  const entryTitle = entry.getIn(['data', 'title'])
  const entryTags = entry.getIn(['data', 'tags'])
  const entryFeatured = entry.getIn(['data', 'featuredImage'])

  return (
    <ThemeProvider theme={{ primaryColor: 'red' }}>
      <Layout>
        <DefaultStyles />

        <IndexPageTemplate
          content={mockBodyContent}
          portfolioContent={{
            edges: [
              {
                node: {
                  frontmatter: {
                    title: entryTitle.toString(),
                    featuredImage: getAsset(entryFeatured).toString(),
                    tags: entryTags.toJS(),
                  },
                },
              },
            ],
          }}
        />
      </Layout>
    </ThemeProvider>
  )
}

export default PortfolioPostPreview
