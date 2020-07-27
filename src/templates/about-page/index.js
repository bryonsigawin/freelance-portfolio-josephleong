import React, { useContext, useState } from 'react'
import { ThemeContext } from 'styled-components'

import SEO from '@components/SEO'
import Container from '@components/Container'
import Layout from '@components/Layout'
import Grid from '@components/Grid'
import Section from '@components/Section'
import ContentContainer from '@components/ContentContainer'

const AboutPage = () => {
  const theme = useContext(ThemeContext)

  return (
    <Layout>
      <SEO title="About" />

      <Container>
        <Section background={theme.primaryColor}>
          <Grid columns="0.4fr 1fr" gap="0.5rem">
            <div>IMAGE</div>

            <ContentContainer color="white" fontSize="1.1rem" lineHeight="1.5">
              <h1>This is the headline</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nihil explicabo natus, in
                placeat et quasi corporis reiciendis aliquam ipsum earum dignissimos possimus. Sunt voluptatem
                nesciunt adipisci quo ducimus sint.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio nihil explicabo natus, in
                placeat et quasi corporis reiciendis aliquam ipsum earum dignissimos possimus. Sunt voluptatem
                nesciunt adipisci quo ducimus sint.
              </p>
            </ContentContainer>
          </Grid>
        </Section>
      </Container>
    </Layout>
  )
}

export default AboutPage
