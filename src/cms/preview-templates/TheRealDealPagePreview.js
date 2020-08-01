import React from 'react'
import { TheRealDealPageTemplate } from '../../templates/the-real-deal-page'
import { ThemeProvider } from 'styled-components'

const TheRealDealPreview = ({ widgetFor }) => {
  return (
    <ThemeProvider theme={{ primaryColor: 'red' }}>
      <TheRealDealPageTemplate content={widgetFor('body')} />
    </ThemeProvider>
  )
}

export default TheRealDealPreview
