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
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;

  position: absolute;
  top: 0;
  left: 0;

  width: 100%;
  height: 100%;

  padding: 1rem;
  color: white;
`
