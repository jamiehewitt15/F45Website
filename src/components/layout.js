import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby" 
import styles from "./layout.module.css"
import Logo from "../images/F45_LOGO.png"

const ListLink = props => (
  <li className={styles.listlink} >
    <Link to={props.to}>{props.children}</Link>
  </li>
)

export default ({ children }) => {
    const data = useStaticQuery(
      graphql`
        query {
          site {
            siteMetadata {
              title
            }
          }
        }
      `
    )
    return (
  <div>
    <header className={styles.header}>
      
      <div className={styles.logodiv}>
      <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
        <img className={styles.logo} src={Logo} alt="F45 Logo" />
      </Link>
      </div>
      <div className={styles.centremenu}>
        
        <ul style={{ listStyle: `none`, float: `right` }}>
          <ListLink to="/">{data.site.siteMetadata.title}</ListLink>
          <ListLink to="/">Home</ListLink>
          <ListLink to="/about/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          <ListLink to="https://f45training.co.uk/TowerBridge">Global Site</ListLink>
        </ul>
      </div>
      
        
    </header>
    <body className={styles.body}>
      {children}
    </body>
  </div>
    )
  }


