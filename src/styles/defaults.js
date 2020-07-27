import { createGlobalStyle } from 'styled-components'

import colors from './colors'
import fonts from './fontSize'

const DefaultStyles = createGlobalStyle`
  :root {
    font-size: 18px;
  }

  * {
    &,
    &::before,
    &::after {
      box-sizing: border-box;
    }
  }

  body {
    font-family: 'Optima', sans-serif;
    font-weight: 300;
    color: ${colors.black};
    line-height: 1.3;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Palatino', sans-serif;
    font-weight: 300;
    letter-spacing: 1px;
    line-height: 1.25;

    margin: 0;
    margin-bottom: 1rem;
  }

  h1 {
    font-size: ${fonts.h1};
  }

  h2 {
    font-size: ${fonts.h2};
  }

  h3 {
    font-size: ${fonts.h3};
  }

  h4 {
    font-size: ${fonts.h4};
  }

  h5 {
    font-size: ${fonts.h5};
  }

  h6 {
    font-size: ${fonts.h6};
  }

  a {
    color: inherit;
    cursor: pointer;
    text-decoration: none;

    :hover {
      text-decoration: underline;
    }
  } 

  ul {
    li {
      margin-bottom: 0.5rem;
    }
  }

  b, strong {
    font-weight: bold;
  }
`
export default DefaultStyles
