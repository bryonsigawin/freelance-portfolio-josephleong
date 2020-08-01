import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'
import { ThemeProvider } from 'styled-components'

const IndexPagePreview = ({ entry, widgetFor }) => {
  console.log(entry)

  console.log(widgetFor('body'))

  return (
    <ThemeProvider theme={{ primaryColor: 'red' }}>
      <IndexPageTemplate content="asd" />
    </ThemeProvider>
  )
}

export default IndexPagePreview
