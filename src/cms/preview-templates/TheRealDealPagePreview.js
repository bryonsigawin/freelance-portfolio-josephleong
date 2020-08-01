import React from 'react'
import { TheRealDealTemplate } from '../../templates/the-real-deal-page'
import { ThemeProvider } from 'styled-components'

const TheRealDealPreview = ({ widgetFor }) => {
  return (
    <ThemeProvider theme={{ primaryColor: 'red' }}>
      <TheRealDealTemplate content={widgetFor('body')} />
    </ThemeProvider>
  )
}

export default TheRealDealPreview
