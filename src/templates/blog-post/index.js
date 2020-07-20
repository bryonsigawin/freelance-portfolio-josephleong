import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'

const AboutPage = ({ data }) => {
  const { html: content } = data.markdownRemark

  return (
    <Layout>
      <div
        className="section has-background-danger	has-text-white is-fullheight"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
        description
        tags
      }
    }
  }
`
