import React from 'react'
import { AboutPageTemplate } from '../../templates/about-page'
import { ThemeProvider } from 'styled-components'

const AboutPagePreview = ({ widgetFor, entry, getAsset }) => {
  const entryFeaturedImage = entry.getIn(['data', 'featuredImage'])

  return (
    <ThemeProvider theme={{ primaryColor: 'red' }}>
      <AboutPageTemplate
        content={widgetFor('body')}
        featuredImage={getAsset(entryFeaturedImage).toString()}
      />
    </ThemeProvider>
  )
}

export default AboutPagePreview
