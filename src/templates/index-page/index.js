// import React, { useState, useRef, useEffect } from 'react'
// import { graphql } from 'gatsby'
// import { motion, AnimatePresence, AnimateSharedLayout } from 'framer-motion'

// import Layout from '../../components/Layout'

// import styles from './styles.module.scss'

// const ShowcaseItem = ({ item, isVisible }) => (
//   <AnimatePresence>
//     {isVisible && (
//       <motion.div
//         layout
//         className={styles.showcaseItem}
//         initial={false}
//         animate={{ opacity: 1 }}
//         exit={{ opacity: 0 }}
//       >
//         <div className={styles.showcaseItemInner}>
//           <p>Item: {item}</p>
//         </div>
//       </motion.div>
//     )}
//   </AnimatePresence>
// )

// const IndexPage = ({ data }) => {
//   const { html: content } = data.markdownRemark

//   const items = ['DESIGN', 'MARKETING', 'DESIGN']

//   const [currentFilter, setCurrentFilter] = useState('SHOW ALL')

//   const checkVisible = (item) => (currentFilter === 'SHOW ALL' ? true : item === currentFilter)

//   return (
//     <Layout>
//       <div className="hero is-danger">
//         <div className="hero-body has-text-centered" dangerouslySetInnerHTML={{ __html: content }} />
//       </div>

//       <div className="section px-0">
//         <div className={styles.filter}>
//           <div onClick={() => setCurrentFilter('SHOW ALL')} className={styles.filterItemSelected}>
//             SHOW ALL
//           </div>
//           <div onClick={() => setCurrentFilter('DESIGN')} className={styles.filterItem}>
//             DESIGN
//           </div>
//           <div onClick={() => setCurrentFilter('MARKETING')} className={styles.filterItem}>
//             MARKETING
//           </div>
//           <div onClick={() => setCurrentFilter('STRATEGIC')} className={styles.filterItem}>
//             STRATEGIC
//           </div>
//         </div>

//         <AnimateSharedLayout>
//           <motion.div layout className={styles.showcase}>
//             {items.map((item, index) => (
//               <ShowcaseItem item={item} key={index} isVisible={checkVisible(item)} />
//             ))}
//           </motion.div>
//         </AnimateSharedLayout>
//       </div>
//     </Layout>
//   )
// }

// export default IndexPage

// export const pageQuery = graphql`
//   query IndexPageTemplate {
//     markdownRemark(frontmatter: { templateKey: { eq: "index-page" } }) {
//       html
//     }
//   }
// `

import React, { useContext, useState } from 'react'
import Container from '@components/Container'
import Layout from '@components/Layout'
import SEO from '@components/SEO'
import Section from '@components/Section'

import { ThemeContext } from 'styled-components'
import { Headline, SubHeadline } from '@components/Typography'
import PortfolioItem from './PortfolioItem'
import Grid from '@components/Grid'
import { Filter, FilterItem } from './styles'
import ContentContainer from '@components/ContentContainer'

const IndexPage = ({ data }) => {
  const theme = useContext(ThemeContext)

  const { html: content } = data.markdownRemark

  const filterOptions = ['SHOW ALL', 'DESIGN', 'MARKETING', 'STRATEGIC']
  const [activeFilter, setActiveFilter] = useState(0)

  return (
    <Layout>
      <SEO title="Home" />

      <Container>
        <Section background={theme.primaryColor} textAlign="center">
          <ContentContainer
            color="white"
            fontSize="1.1rem"
            lineHeight="1.5"
            dangerouslySetInnerHTML={{ __html: content }}
          />
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
