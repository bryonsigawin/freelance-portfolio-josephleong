import React, { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

import Layout from '../../components/Layout'

import styles from './styles.module.scss'
import { graphql } from 'gatsby'

const ShowcaseItem = ({ item, isVisible }) => (
  <AnimatePresence>
    {isVisible && (
      <motion.div
        layout
        className={styles.showcaseItem}
        initial={false}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className={styles.showcaseItemInner}>
          <p>Item: {item}</p>
        </div>
      </motion.div>
    )}
  </AnimatePresence>
)

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark

  const items = ['DESIGN', 'MARKETING', 'DESIGN']

  const [currentFilter, setCurrentFilter] = useState('SHOW ALL')

  const checkVisible = (item) => (currentFilter === 'SHOW ALL' ? true : item === currentFilter)

  return (
    <Layout>
      <div className="hero is-danger">
        <div className="hero-body has-text-centered">
          <h1 className="title">{frontmatter.heading}</h1>
          <h2 className="subtitle">{frontmatter.subheading}</h2>
        </div>
      </div>

      <div className="section px-0">
        <div className={styles.filter}>
          <div onClick={() => setCurrentFilter('SHOW ALL')} className={styles.filterItemSelected}>
            SHOW ALL
          </div>
          <div onClick={() => setCurrentFilter('DESIGN')} className={styles.filterItem}>
            DESIGN
          </div>
          <div onClick={() => setCurrentFilter('MARKETING')} className={styles.filterItem}>
            MARKETING
          </div>
          <div onClick={() => setCurrentFilter('STRATEGIC')} className={styles.filterItem}>
            STRATEGIC
          </div>
        </div>

        <AnimateSharedLayout>
          <motion.div layout className={styles.showcase}>
            {items.map((item, index) => (
              <ShowcaseItem item={item} key={index} isVisible={checkVisible(item)} />
            ))}
          </motion.div>
        </AnimateSharedLayout>
      </div>
    </Layout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageTemplate {
    markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
      frontmatter {
        heading
        subheading
        title
      }
    }
  }
`
