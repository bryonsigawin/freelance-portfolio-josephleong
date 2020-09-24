import React from 'react'
import { AboutPageTemplate } from '../../templates/about-page'
import { ThemeProvider } from 'styled-components'

import Layout from '@components/Layout'
import DefaultStyles from '@styles/defaults'

const AboutPagePreview = ({ widgetFor, entry, getAsset }) => {
  const entryFeaturedImage = entry.getIn(['data', 'featuredImage'])

  return (
    <ThemeProvider theme={{ primaryColor: 'red' }}>
      <Layout>
        <DefaultStyles />

        <AboutPageTemplate
          content={widgetFor('body')}
          featuredImage={getAsset(entryFeaturedImage).toString()}
        />
      </Layout>
    </ThemeProvider>
  )
}

export default AboutPagePreview
