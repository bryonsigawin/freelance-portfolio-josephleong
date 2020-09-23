import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'
import { graphql } from 'gatsby'

import SEO from '@components/SEO'
import Container from '@components/Container'
import Layout from '@components/Layout'
import Grid from '@components/Grid'
import Section from '@components/Section'
import ContentContainer from '@components/ContentContainer'
import PreviewCompatibleImage from '@components/PreviewCompatibleImage'

export const AboutPageTemplate = ({ content, featuredImage }) => {
  const theme = useContext(ThemeContext)

  return (
    <Container>
      <Section background={theme.primaryColor}>
        <Grid columns="0.4fr 1fr" gap="0.5rem">
          <PreviewCompatibleImage image={featuredImage} />

          <ContentContainer color="white" fontSize="1.1rem" lineHeight="1.5">
            {content}
          </ContentContainer>
        </Grid>
      </Section>
    </Container>
  )
}

const AboutPage = ({ data }) => {
  const {
    html: content,
    frontmatter: { featuredImage },
  } = data.markdownRemark

  return (
    <Layout>
      <SEO title="About" />

      <AboutPageTemplate
        content={<div dangerouslySetInnerHTML={{ __html: content }} />}
        featuredImage={featuredImage}
      />
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
      frontmatter {
        featuredImage {
          childImageSharp {
            fluid(quality: 90) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    }
  }
`
