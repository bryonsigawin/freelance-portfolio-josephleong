import React from 'react'
import Img from 'gatsby-image'

const PreviewCompatibleImage = ({ image }) => {
  if (!!image && typeof image === 'string')
    return <img style={{ maxWidth: '100%', height: 'auto' }} src={image} />
  else if (!!image.childImageSharp) return <Img fluid={image.childImageSharp.fluid} />

  return null
}

export default PreviewCompatibleImage
