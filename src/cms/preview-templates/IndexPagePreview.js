import React from 'react'
import IndexPage from '../../templates/index-page'
import { ThemeProvider } from 'styled-components'

const IndexPagePreview = ({ widgetFor }) => {
  return (
    <ThemeProvider theme={{ primaryColor: 'red' }}>
      <IndexPage
        data={{
          markdownRemark: { html: widgetFor('body') },
        }}
      />
    </ThemeProvider>
  )
}

export default IndexPagePreview
