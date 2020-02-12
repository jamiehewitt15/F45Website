import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import styles from "./layout.module.css"

const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `1rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => (
  <div>
    <header className={styles.header}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <Img />
      </Link>
      <ul style={{ listStyle: `none`, float: `right` }}>
        <ListLink to="/">Home</ListLink>
        <ListLink to="/about/">About</ListLink>
        <ListLink to="/contact/">Contact</ListLink>
      </ul>
    </header>
    <body className={styles.body}>
      {children}
    </body>
  </div>
  
)