import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'
import { ThemeProvider } from 'styled-components'

const IndexPagePreview = ({ widgetFor }) => {
  return (
    <ThemeProvider theme={{ primaryColor: 'red' }}>
      <IndexPageTemplate headlineContent={widgetFor('body')} />
    </ThemeProvider>
  )
}

export default IndexPagePreview
