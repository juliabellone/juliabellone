import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styles from './footer.module.scss'

const Footer = () => (
  <footer className={styles.main}
  >
    <span>
    © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
    </span>
          

  </footer>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Footer
