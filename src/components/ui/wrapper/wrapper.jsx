import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './wrapper.module.css'

const Wrapper = ({ children, classes }) => {
  if (!children) return null
  return <div className={cx(styles.wrapper, classes)}>{children}</div>
}

Wrapper.defaultProps = {
  children: null,
  classes: null,
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
}

export default Wrapper
