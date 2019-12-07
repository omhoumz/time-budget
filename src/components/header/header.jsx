import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Wrapper from '../ui/wrapper/wrapper'
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <h1 className={styles.logoH1}>
      <Link to='/' className={styles.logo}>
        {siteTitle}
      </Link>
    </h1>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
