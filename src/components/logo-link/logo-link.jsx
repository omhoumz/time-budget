import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import cx from 'classnames'

import styles from './logo-link.module.css'

const LogoLink = ({ classes }) => (
  <Link to='/' className={cx(styles.logo, classes)}>
    time<strong>Budget</strong>
  </Link>
)

LogoLink.propTypes = {
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.object,
    PropTypes.array,
  ]),
}

LogoLink.defaultProps = {
  classes: null,
}

export default LogoLink
