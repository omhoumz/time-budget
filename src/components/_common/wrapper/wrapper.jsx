import React from 'react'
import PropTypes from 'prop-types'

import styles from './wrapper.module.css'

const Wrapper = ({ children }) => {
  if (!children) return null
  return <div className={styles.wrapper}>{children}</div>
}

Wrapper.defaultProps = {
  children: null,
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
}

export default Wrapper
