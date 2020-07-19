import React from 'react'

import 'sanitize.css'
import './global.scss'

import Header from '../Header'
import Footer from '../Footer'

const Layout = ({ children }) => (
  <div className="container">
    <Header />
    {children}
    <Footer />
  </div>
)

export default Layout
