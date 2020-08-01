import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'

import SEO from '@components/SEO'
import Container from '@components/Container'
import Layout from '@components/Layout'
import Section from '@components/Section'
import ContentContainer from '@components/ContentContainer'
import { graphql } from 'gatsby'

export const TheRealDealTemplate = ({ content }) => {
  const theme = useContext(ThemeContext)

  return (
    <Container>
      <Section background={theme.primaryColor}>
        <ContentContainer color="white" fontSize="1.1rem" lineHeight="1.5">
          {content}
        </ContentContainer>
      </Section>
    </Container>
  )
}

const TheRealDeal = ({ data }) => {
  const {
    html: content,
    frontmatter: { title },
  } = data.markdownRemark

  return (
    <Layout>
      <SEO title={title} />

      <TheRealDealTemplate content={<div dangerouslySetInnerHTML={{ __html: content }} />} />
    </Layout>
  )
}

export default TheRealDeal

export const pageQuery = graphql`
  query TheRealDealPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        title
      }
    }
  }
`
