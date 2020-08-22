import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'
import { ThemeProvider } from 'styled-components'

const IndexPagePreview = ({ widgetFor }) => {
  console.log(widgetFor('portfolioHighlight'))

  return (
    <ThemeProvider theme={{ primaryColor: 'red' }}>
      <IndexPageTemplate content={widgetFor('body')} />
    </ThemeProvider>
  )
}

export default IndexPagePreview
