import React from 'react'
import { Link } from 'gatsby'

const ListItem = ({ data }) => (
  <div className="columns">
    <div className="column">
      <h4>{data.subtitle}</h4>
      <h3>{data.title}</h3>
      <p>{data.description}</p>
      <Link className="has-text-white	">
        <u>
          <i>Read Journal</i>
        </u>
      </Link>
    </div>
    <div className="column is-one-quarter"></div>
  </div>
)

export default ListItem
