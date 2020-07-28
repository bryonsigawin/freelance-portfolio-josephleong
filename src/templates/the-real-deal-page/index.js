import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import SEO from '@components/SEO'
import Container from '@components/Container'
import Layout from '@components/Layout'
import Section from '@components/Section'
import ContentContainer from '@components/ContentContainer'
import { Divider } from './styles'
import ChapterItem from './ChapterItem'

const TheRealDealPage = ({ data }) => {
  const { html: content } = data.markdownRemark
  const theme = useContext(ThemeContext)

  return (
    <Layout>
      <SEO title="The Real Deal" />

      <Container>
        <Section background={theme.primaryColor}>
          <ContentContainer
            color="white"
            fontSize="1.1rem"
            lineHeight="1.5"
            dangerouslySetInnerHTML={{ __html: content }}
          />
          <Divider />

          <ChapterItem />
        </Section>
      </Container>
    </Layout>
  )
}

export default TheRealDealPage

export const pageQuery = graphql`
  query TheRealDealPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "the-real-deal-page" } }) {
      html
    }
  }
`
