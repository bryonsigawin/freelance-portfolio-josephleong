import React from 'react'
import IndexPage from '../../templates/index-page'
import { ThemeProvider } from 'styled-components'

const IndexPagePreview = ({ entry, getAsset }) => {
  const data = entry.getIn(['data']).toJS()

  console.log(data)

  if (data) {
    return (
      <ThemeProvider theme={{ primaryColor: 'red' }}>
        <IndexPage
          data={{
            markdownRemark: { html: data.body || '' },
          }}
        />
      </ThemeProvider>
    )
  } else {
    return <div>Loading...</div>
  }
}

export default IndexPagePreview
