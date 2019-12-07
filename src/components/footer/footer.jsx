import React from 'react'

import Wrapper from '../_common/wrapper/wrapper'
import styles from './footer.module.css'

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Wrapper>
        © {new Date().getFullYear()}, Built with{' '}
        <a href='https://www.gatsbyjs.org'>Gatsby</a>
      </Wrapper>
    </footer>
  )
}

export default Footer
