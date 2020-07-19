import React from 'react'
import Layout from '../../components/Layout'

const AboutPage = ({ data }) => {
  const { html: content } = data.markdownRemark

  return (
    <Layout>
      <div className="section has-background-danger	has-text-white is-fullheight">
        <div className="columns">
          <div className="column is-one-third"></div>
          <div className="column" dangerouslySetInnerHTML={{ __html: content }} />
        </div>
      </div>
    </Layout>
  )
}

export default AboutPage

export const pageQuery = graphql`
  query AboutPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "about-page" } }) {
      html
    }
  }
`
