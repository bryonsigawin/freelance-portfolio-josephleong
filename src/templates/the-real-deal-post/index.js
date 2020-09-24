import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { graphql } from 'gatsby'

import SEO from '@components/SEO'
import Container from '@components/Container'
import Layout from '@components/Layout'
import Section from '@components/Section'
import ContentContainer from '@components/ContentContainer'
import PreviewCompatibleImage from '@components/PreviewCompatibleImage'

import { Headline, SubHeadline, Body } from '@components/Typography'

export const TheRealDealTemplate = ({ content, metadata }) => {
  const theme = useContext(ThemeContext)

  const { featuredImage, description, title, subtitle } = metadata

  return (
    <React.Fragment>
      <Container>
        <PreviewCompatibleImage image={featuredImage} />
      </Container>

      <Container>
        <Section>
          <SubHeadline color="#5e6167">{subtitle}</SubHeadline>
          <Headline color="#5e6167">{title}</Headline>
          <Body color="#5e6167">{description}</Body>
        </Section>
      </Container>

      <Container>
        <Section background={theme.primaryColor}>
          <ContentContainer color="white" fontSize="1.1rem" lineHeight="1.5">
            {content}
          </ContentContainer>
        </Section>
      </Container>
    </React.Fragment>
  )
}

const TheRealDeal = ({ data }) => {
  const { html: content, frontmatter } = data.markdownRemark

  return (
    <Layout>
      <SEO title={frontmatter.title} />

      <TheRealDealTemplate
        content={<div dangerouslySetInnerHTML={{ __html: content }} />}
        metadata={frontmatter}
      />
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
        subtitle
        description
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
