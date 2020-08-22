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

export const Title = styled.h2`
  position: absolute;
  top: 50%;
  left: 50%;

  width: 100%;
  padding: 0 1rem;

  transform: translate(-50%, -50%);
`
