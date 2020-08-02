import React, { useState, useEffect, useRef } from 'react'

import 'sanitize.css'
import { StyledLayout } from './styles'

import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => {
  const [headerSize, setHeaderSize] = useState(0)
  const headerRef = useRef()

  useEffect(() => {
    const header = headerRef.current
    if (header) setHeaderSize(header.clientHeight)
  }, [])

  return (
    <React.Fragment>
      <Header ref={headerRef} />

      <StyledLayout paddingTop={headerSize}>{children}</StyledLayout>

      <Footer />
    </React.Fragment>
  )
}

export default Layout
