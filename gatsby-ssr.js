const React = require('react')
const { ThemeProvider } = require('styled-components')
const { default: DefaultStyles } = require('@styles/defaults')

exports.wrapRootElement = ({ element }) => (
  <ThemeProvider theme={{ primaryColor: 'red' }}>
    <DefaultStyles />
    {element}
  </ThemeProvider>
)
