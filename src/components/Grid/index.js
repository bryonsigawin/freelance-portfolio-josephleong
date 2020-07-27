import styled, { css } from 'styled-components'

const generateMediaQueries = (cssProperty, breakpoints) => {
  const createCSSProperties = () => {
    switch (typeof breakpoints) {
      case 'number':
        return `${cssProperty}: repeat(${breakpoints}, 1fr);`
      case 'string':
        return `${cssProperty}: ${breakpoints};`
      case 'object':
        return Object.keys(breakpoints).reduce((prev, current) => {
          return `
          ${prev};

          @media ${current} {
            ${cssProperty}: ${breakpoints[current]};
          }
        `
        }, '')
      default:
        return ``
    }
  }

  return css`
    ${createCSSProperties()}
  `
}

const Grid = styled.div`
  display: grid;

  ${(props) =>
    props.marginTop &&
    css`
      margin-top: ${props.marginTop};
    `}  
  ${(props) =>
    props.marginBottom &&
    css`
      margin-bottom: ${props.marginBottom};
    `}  

  /* Grid auto flow */
  ${(props) =>
    props.autoFlow &&
    css`
      grid-auto-flow: ${props.autoFlow};
    `}  
  
  /* Grid column */
  ${({ columns }) => generateMediaQueries('grid-template-columns', columns)}
  ${({ rows }) => generateMediaQueries('grid-template-rows', rows)}

  /* Grid alignment */
  ${(props) =>
    props.alignItems &&
    css`
      align-items: ${props.alignItems};
    `}

  ${(props) =>
    props.alignContent &&
    css`
      align-content: ${props.alignContent};
    `}

  /* Grid justify */    
  ${(props) =>
    props.justifyItems &&
    css`
      justify-items: ${props.justifyItems};
    `}
  
  ${(props) =>
    props.justifyContent &&
    css`
      justify-content: ${props.justifyContent};
    `}

  /* Grid gap */
  ${(props) =>
    props.gap && typeof props.gap !== 'string'
      ? css`
          column-gap: ${props.gap[0]};
          row-gap: ${props.gap[1]};
        `
      : css`
          gap: ${props.gap};
        `}
`

export default Grid
