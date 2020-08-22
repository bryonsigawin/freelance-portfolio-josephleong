import React from 'react'
import { IndexPageTemplate } from '../../templates/index-page'
import { ThemeProvider } from 'styled-components'

const IndexPagePreview = ({ entry, widgetFor, widgetsFor }) => {
  const portfolioHighlights = entry.getIn(['data', 'portfolioHighlight'])

  console.log('widgetsFor: portfolio', widgetsFor('portfolioHighlight'))
  console.log('----------------------------------------------')
  console.log('plain', portfolioHighlights)
  console.log('toJS', portfolioHighlights.toJS())
  console.log('----------------------------------------------')
  console.log('getEntry: body', entry.getIn(['data', 'body']))
  console.log('widgetFor: body', widgetFor('body'))

  return (
    <ThemeProvider theme={{ primaryColor: 'red' }}>
      <IndexPageTemplate content={widgetFor('body')} />
    </ThemeProvider>
  )
}

export default IndexPagePreview
