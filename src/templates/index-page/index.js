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

export const IndexPageTemplate = ({ headlineContent }) => {
  const theme = useContext(ThemeContext)

  const filterOptions = ['SHOW ALL', 'DESIGN', 'MARKETING', 'STRATEGIC']
  const [activeFilter, setActiveFilter] = useState(0)

  return (
    <>
      <Container>
        <Section background={theme.primaryColor} textAlign="center">
          <ContentContainer color="white" fontSize="1.1rem" lineHeight="1.5">
            {headlineContent}
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
          {[1, 2, 3, 4, 5].map((data, index) => (
            <PortfolioItem key={index} data={data} />
          ))}
        </Grid>
      </Container>
    </>
  )
}

const IndexPage = ({ data }) => {
  const { html } = data.markdownRemark

  return (
    <Layout>
      <SEO title="Home" />
      <IndexPageTemplate headlineContent={<div dangerouslySetInnerHTML={{ __html: html }} />} />
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      html
    }
  }
`
