import React from 'react'
import { AboutPageTemplate } from '../../templates/about-page'
import { ThemeProvider } from 'styled-components'

const AboutPagePreview = ({ widgetFor }) => {
  return (
    <ThemeProvider theme={{ primaryColor: 'red' }}>
      <AboutPageTemplate content={widgetFor('body')} />
    </ThemeProvider>
  )
}

export default AboutPagePreview
