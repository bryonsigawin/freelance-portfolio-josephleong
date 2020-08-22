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

export const TheRealDealPageTemplate = ({ content, theRealDealContent }) => {
  const theme = useContext(ThemeContext)

  return (
    <Container>
      <Section background={theme.primaryColor}>
        <ContentContainer color="white" fontSize="1.1rem" lineHeight="1.5" textAlign="center">
          {content}
        </ContentContainer>
        <Divider />
        {theRealDealContent.edges.map((edge, index) => (
          <ChapterItem
            key={index}
            data={edge.node.frontmatter}
            permalink={edge.node.fields && edge.node.fields.slug}
          />
        ))}
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
        theRealDealContent={allTheRealDealPosts}
      />
    </Layout>
  )
}

export default TheRealDealPage

export const pageQuery = graphql`
  query TheRealDealPageTemplate($chapterPosts: [String]!) {
    markdownRemark(frontmatter: { templateKey: { eq: "the-real-deal-page" } }) {
      html
    }

    allTheRealDealPosts: allMarkdownRemark(filter: { frontmatter: { title: { in: $chapterPosts } } }) {
      edges {
        node {
          fields {
            slug
          }
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
