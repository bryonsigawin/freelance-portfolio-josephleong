import React, { useContext, useState } from 'react'
import Container from '@components/Container'
import Layout from '@components/Layout'
import SEO from '@components/SEO'
import Section from '@components/Section'

import { ThemeContext } from 'styled-components'
import PortfolioItem from './PortfolioItem'
import Grid from '@components/Grid'
import { Filter, FilterItem } from './styles'
import ContentContainer from '@components/ContentContainer'
import { graphql } from 'gatsby'

export const IndexPageTemplate = ({ content, portfolioContent }) => {
  const theme = useContext(ThemeContext)

  const filterOptions = ['Design', 'Marketing', 'Strategic']
  const [activeFilter, setActiveFilter] = useState(0)

  const checkFilterMatch = (tags) => {
    return tags.indexOf(filterOptions[activeFilter] !== -1)
  }

  return (
    <>
      <Container>
        <Section background={theme.primaryColor} textAlign="center">
          <ContentContainer color="white" fontSize="1.1rem" lineHeight="1.5">
            {content}
          </ContentContainer>
        </Section>
      </Container>

      <Container>
        <Filter>
          {filterOptions.map((value, index) => (
            <FilterItem key={index} isActive={index === activeFilter} onClick={() => setActiveFilter(index)}>
              {value}
            </FilterItem>
          ))}
        </Filter>

        <Grid gap="0.2rem" columns="1fr 1fr 1fr">
          {portfolioContent
            ? portfolioContent.edges.map(
                (edge, index) =>
                  checkFilterMatch(edge.node.frontmatter.tags) && (
                    <PortfolioItem key={index} data={edge.node.frontmatter} />
                  )
              )
            : Array.from(Array(9)).map((a, index) => <PortfolioItem key={index} />)}
        </Grid>
      </Container>
    </>
  )
}

const IndexPage = ({ data }) => {
  const {
    allPortfolioContent,
    markdownRemark: { html },
  } = data

  return (
    <Layout>
      <SEO title="Home" />

      <IndexPageTemplate
        content={<div dangerouslySetInnerHTML={{ __html: html }} />}
        portfolioContent={allPortfolioContent}
      />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate($portfolioPosts: [String]!) {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
    }

    allPortfolioContent: allMarkdownRemark(filter: { frontmatter: { title: { in: $portfolioPosts } } }) {
      edges {
        node {
          frontmatter {
            title
            date
            description
            tags
            featuredImage {
              childImageSharp {
                fluid(quality: 90) {
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
