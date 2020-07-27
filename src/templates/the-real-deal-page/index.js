import React, { useContext } from 'react'
import { ThemeContext } from 'styled-components'

import SEO from '@components/SEO'
import Container from '@components/Container'
import Layout from '@components/Layout'
import Grid from '@components/Grid'
import Section from '@components/Section'
import ContentContainer from '@components/ContentContainer'
import { Divider } from './styles'
import ChapterItem from './ChapterItem'

const TheRealDealPage = () => {
  const theme = useContext(ThemeContext)

  return (
    <Layout>
      <SEO title="The Real Deal" />

      <Container>
        <Section background={theme.primaryColor}>
          <ContentContainer color="white" fontSize="1.1rem" lineHeight="1.5" textAlign="center">
            <h1>headline</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates explicabo consectetur
              asperiores id debitis officiis, quidem quod quasi quisquam tempora rerum sit voluptatum pariatur
              labore, eum, sunt tempore nisi. Maxime.
            </p>
          </ContentContainer>

          <Divider />

          <ChapterItem />
        </Section>
      </Container>
    </Layout>
  )
}

export default TheRealDealPage
