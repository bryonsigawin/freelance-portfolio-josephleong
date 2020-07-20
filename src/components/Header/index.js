import React from 'react'
import { Link } from 'gatsby'

const Header = () => (
  <nav className="navbar">
    <div className="navbar-brand">
      <Link className="navbar-item" to="/">
        <div className="box">logo</div>
        {/* <img src="https://bulma.io/images/bulma-logo.png" width="112" height="28" /> */}
      </Link>
      <a role="button" className="navbar-burger burger" aria-label="menu" aria-expanded="false" href="#">
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
        <span aria-hidden="true"></span>
      </a>
    </div>

    <div className="navbar-menu">
      <div className="navbar-end">
        <div className="navbar-item">
          <Link to="/blog" className="ml-5 has-text-black">
            THE REAL DEAL
          </Link>
          <Link to="/about" className="ml-5 has-text-black">
            ABOUT
          </Link>
        </div>
      </div>
    </div>
  </nav>
)

export default Header
