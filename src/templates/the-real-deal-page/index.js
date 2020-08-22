import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import SEO from '@components/SEO'
import Container from '@components/Container'
import Layout from '@components/Layout'
import Section from '@components/Section'
import ContentContainer from '@components/ContentContainer'
import { Divider } from './styles'
import ChapterItem from './ChapterItem'
import { graphql } from 'gatsby'

export const TheRealDealPageTemplate = ({ content, theRealDealPosts }) => {
  const theme = useContext(ThemeContext)

  return (
    <Container>
      <Section background={theme.primaryColor}>
        <ContentContainer color="white" fontSize="1.1rem" lineHeight="1.5" textAlign="center">
          {content}
        </ContentContainer>
        <Divider />
        {theRealDealPosts
          ? theRealDealPosts.edges.map((edge, index) => (
              <ChapterItem key={index} data={edge.node.frontmatter} />
            ))
          : Array.from(Array(4)).map((a, index) => <ChapterItem key={index} />)}
      </Section>
    </Container>
  )
}

const TheRealDealPage = ({ data }) => {
  const {
    allTheRealDealPosts,
    markdownRemark: { html },
  } = data

  return (
    <Layout>
      <SEO title="The Real Deal" />
      <TheRealDealPageTemplate
        content={<div dangerouslySetInnerHTML={{ __html: html }} />}
        // theRealDealPosts={allTheRealDealPosts}
      />
    </Layout>
  )
}

export default TheRealDealPage

export const pageQuery = graphql`
  query TheRealDealPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "the-real-deal-page" } }) {
      html
    }

    allTheRealDealPosts: allMarkdownRemark(
      filter: { frontmatter: { templateKey: { eq: "the-real-deal-post" } } }
    ) {
      edges {
        node {
          frontmatter {
            title
            subtitle
            description
            featuredImage {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
