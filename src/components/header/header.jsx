import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'

import Wrapper from '../ui/wrapper/wrapper'
import styles from './header.module.css'

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <Wrapper>
      <h1 style={{ margin: 0 }}>
        <Link
          to='/'
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          {siteTitle}
        </Link>
      </h1>
    </Wrapper>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
