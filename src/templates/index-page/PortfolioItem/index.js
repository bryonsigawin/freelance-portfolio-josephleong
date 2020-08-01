import React from 'react'
import { StyledPortfolioItem, Inner } from './styles'

const PortfolioItem = ({ data }) => (
  <StyledPortfolioItem>
    <Inner>{data.title}</Inner>
  </StyledPortfolioItem>
)

export default PortfolioItem
