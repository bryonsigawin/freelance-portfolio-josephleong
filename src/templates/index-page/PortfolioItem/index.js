import React from 'react'
import Img from 'gatsby-image'

import { StyledPortfolioItem, Inner } from './styles'

const PortfolioItem = ({ data }) => (
  <StyledPortfolioItem>
    <Inner>{data && <Img fluid={data.featuredImage.childImageSharp.fluid} />}</Inner>
  </StyledPortfolioItem>
)

export default PortfolioItem
