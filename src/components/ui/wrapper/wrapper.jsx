import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'

import styles from './wrapper.module.css'

const Wrapper = ({ children, comp, classes }) => {
  const Comp = comp || 'div'

  return <Comp className={cx(styles.wrapper, classes)}>{children}</Comp>
}

Wrapper.defaultProps = {
  children: null,
  classes: null,
  comp: undefined,
}

Wrapper.propTypes = {
  children: PropTypes.oneOfType([PropTypes.element, PropTypes.node]),
  classes: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.array,
    PropTypes.object,
  ]),
  comp: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.element,
    PropTypes.node,
  ]),
}

export default Wrapper
