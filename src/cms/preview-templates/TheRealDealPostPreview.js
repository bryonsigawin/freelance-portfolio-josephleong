import React from 'react'
import { TheRealDealPostTemplate } from '../../templates/the-real-deal-post'
import { ThemeProvider } from 'styled-components'

import Layout from '@components/Layout'
import DefaultStyles from '@styles/defaults'

const TheRealDealPostPreview = ({ widgetFor, entry, getAsset }) => {
  const entryTitle = entry.getIn(['data', 'title'])
  const entrySubtitle = entry.getIn(['data', 'subtitle'])
  const entryDescription = entry.getIn(['data', 'description'])
  const entryFeaturedImage = entry.getIn(['data', 'featuredImage'])

  return (
    <ThemeProvider theme={{ primaryColor: 'red' }}>
      <Layout>
        <DefaultStyles />

        <TheRealDealPostTemplate
          content={widgetFor('body')}
          metadata={{
            title: entryTitle.toString(),
            subtitle: entrySubtitle.toString(),
            description: entryDescription.toString(),
            featuredImage: getAsset(entryFeaturedImage).toString(),
          }}
        />
      </Layout>
    </ThemeProvider>
  )
}

export default TheRealDealPostPreview
