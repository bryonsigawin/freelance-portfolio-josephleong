import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'

import SEO from '@components/SEO'
import Container from '@components/Container'
import Layout from '@components/Layout'
import Grid from '@components/Grid'
import Section from '@components/Section'
import ContentContainer from '@components/ContentContainer'
import { graphql } from 'gatsby'

export const AboutPageTemplate = ({ content }) => {
  const theme = useContext(ThemeContext)

  return (
    <Layout>
      <SEO title="About" />

      <Container>
        <Section background={theme.primaryColor}>
          <Grid columns="0.4fr 1fr" gap="0.5rem">
            <div>IMAGE</div>

            <ContentContainer color="white" fontSize="1.1rem" lineHeight="1.5">
              {content}
            </ContentContainer>
          </Grid>
        </Section>
      </Container>
    </Layout>
  )
}

const AboutPage = ({ data }) => {
  const { html: content } = data.markdownRemark

  return <AboutPageTemplate content={<div dangerouslySetInnerHTML={{ __html: content }} />} />
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
    }
  }
`
