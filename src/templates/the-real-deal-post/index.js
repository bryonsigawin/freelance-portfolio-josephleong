import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'

import SEO from '@components/SEO'
import Container from '@components/Container'
import Layout from '@components/Layout'
import Grid from '@components/Grid'
import Section from '@components/Section'
import ContentContainer from '@components/ContentContainer'

const TheRealDealPost = () => {
  const theme = useContext(ThemeContext)

  return (
    <Layout>
      <Container></Container>
    </Layout>
  )
}

export default TheRealDealPost
