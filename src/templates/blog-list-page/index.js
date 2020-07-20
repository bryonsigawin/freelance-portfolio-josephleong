import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../../components/Layout'
import styles from './styles.module.scss'
import ListItem from './components/ListItem'

const BlogListPage = ({ data }) => {
  const { html: content } = data.markdownRemark

  const listing = [1, 2, 3]

  return (
    <Layout>
      <div className="section has-background-danger	has-text-white is-fullheight">
        <div className="hero is-danger">
          <div className="hero-body has-text-centered" dangerouslySetInnerHTML={{ __html: content }} />
        </div>

        <hr className={styles.divider} />

        <div className="section">
          {listing.map((item, index) => (
            <ListItem key={index} data={item} />
          ))}
        </div>
      </div>
    </Layout>
  )
}

export default BlogListPage

export const pageQuery = graphql`
  query BlogListPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "blog-list-page" } }) {
      html
    }
  }
`
