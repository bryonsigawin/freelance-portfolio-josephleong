import styled from 'styled-components'

export const StyledPortfolioItem = styled.div`
  background: ${(props) => props.theme.primaryColor};

  position: relative;
  padding-bottom: 100%;
  height: 0;
`

export const Inner = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;
`
