import React from 'react'
import Img from 'gatsby-image'

import { StyledPortfolioItem, Inner, Title } from './styles'

const PortfolioItem = ({ data }) => (
  <StyledPortfolioItem>
    <Inner>
      {data.title && <Title>{data.title}</Title>}
      {data.featuredImage && <Img fluid={data.featuredImage.childImageSharp.fluid} />}
    </Inner>
  </StyledPortfolioItem>
)

export default PortfolioItem
