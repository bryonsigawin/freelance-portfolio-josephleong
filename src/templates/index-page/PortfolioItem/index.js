import React from 'react'
import Img from 'gatsby-image'

import { StyledPortfolioItem, Inner, Title } from './styles'
import PreviewCompatibleImage from '@components/PreviewCompatibleImage'

const PortfolioItem = ({ data }) => (
  <StyledPortfolioItem>
    <Inner>
      {data.title && <Title>{data.title}</Title>}
      <PreviewCompatibleImage image={data.featuredImage} />
    </Inner>
  </StyledPortfolioItem>
)

export default PortfolioItem
