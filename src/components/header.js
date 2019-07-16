import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styles from './header.module.scss'

const Header = () => (
  <header className={styles.main}
  >
        <ul>
        <li>
        <Link
          to="#about"
        >
          
          Who am I
        </Link>
        </li>
                  
        <li>
        <Link
          to="#works"
        >
          Works
        </Link>
        </li>
                  
        <li>
        <Link
          to="#contact"
        >
          Contact me
        </Link>
          </li>
        </ul>

  </header>
)

// Header.propTypes = {
//   siteTitle: PropTypes.string,
// }

// Header.defaultProps = {
//   siteTitle: ``,
// }

export default Header
