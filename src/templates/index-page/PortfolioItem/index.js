import React from 'react'
import { StyledPortfolioItem, Inner } from './styles'

const PortfolioItem = ({ data }) => (
  <StyledPortfolioItem>
    <Inner>Item {data}</Inner>
  </StyledPortfolioItem>
)

export default PortfolioItem
