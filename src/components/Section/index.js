import styled, { css } from 'styled-components'

const Section = styled.section`
  width: 100%;
  padding: 3rem 1.5rem;

  ${(props) =>
    props.background &&
    css`
      background: ${props.background};
    `}

  ${(props) =>
    props.textColor &&
    css`
      color: ${props.textColor};
    `}

  ${(props) =>
    props.textAlign &&
    css`
      text-align: ${props.textAlign};
    `}
`

export default Section
