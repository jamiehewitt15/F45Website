import React from "react"
import { useStaticQuery, graphql, Link } from "gatsby" 
import styles from "./layout.module.css"
import Logo from "../images/F45_LOGO.png"
import FB_Icon from "./icons/fb.js"
import IG_Icon from "./icons/instagram.js"
import Youtube_Icon from "./icons/youtube.js"



const ListLink = props => (
  <li className={styles.listlink} >
    <Link className={styles.link} to={props.to}>{props.children}</Link >
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
          <ListLink to="/">Class Schedule</ListLink>
          <ListLink to="/about/">Workouts</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
          <ListLink to="/contact/">Members</ListLink>
          <ListLink to="https://f45training.co.uk/TowerBridge">Global Site</ListLink>
        </ul>
      </div>
      <div className={styles.rightmenu}>
        <div className={styles.rightcontainer}>
          <div className={styles.social_links}>
            <div className={styles.social_links_wrap}>
            <div className={styles.social_links_item}>
            <FB_Icon />
            </div>
            <div className={styles.social_links_item}>
            <IG_Icon />
            </div>
            <div className={styles.social_links_item}>
            <Youtube_Icon />
            </div>
            </div>
          </div>
        <div className={styles.right_buttons}>
        <div className={styles.right_buttons_wrap}>
        <div className={styles.right_buttons_button}>
          <a className={styles.button} href="tel:+447479013235">Call</a>

        </div>
        </div>


        </div>
        </div>

      </div>
      
        
    </header>
    <body className={styles.body}>
      {children}
    </body>
  </div>
    )
  }


