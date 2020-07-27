import styled from 'styled-components'
import fonts from '@styles/fontSize'

const convertToEm = (fontSize) => fontSize.replace('rem', 'em')

const ContentContainer = styled.div`
  color: ${(props) => props.color};

  font-size: ${(props) => props.fontSize};
  line-height: ${(props) => props.lineHeight};
  text-align: ${(props) => props.textAlign};

  h1 {
    font-size: ${convertToEm(fonts.h1)};
  }

  h2 {
    font-size: ${convertToEm(fonts.h2)};
  }

  h3 {
    font-size: ${convertToEm(fonts.h3)};
  }

  h4 {
    font-size: ${convertToEm(fonts.h4)};
  }

  h5 {
    font-size: ${convertToEm(fonts.h5)};
  }

  h6 {
    font-size: ${convertToEm(fonts.h6)};
  }

  p {
    font-size: 1em;
    margin-bottom: 1.25rem;
  }
`

export default ContentContainer
