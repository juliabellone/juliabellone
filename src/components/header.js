import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import styles from './header.module.scss'

const Header = () => (
  <header className={styles.main}
  >
        <ul>
          
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <li>
          Who am I
          </li>
        </Link>
                  
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <li>
          Works
          </li>
        </Link>
                  
        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <li>
          Contact me
          </li>
        </Link>
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
