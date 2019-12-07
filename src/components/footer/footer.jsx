import React from 'react'

import Wrapper from '../ui/wrapper/wrapper'
import styles from './footer.module.css'

const Footer = () => {
  const copyText = `© ${new Date().getFullYear()}, Built with `

  const byAuthor = ` by `

  return (
    <footer className={styles.footer}>
      <Wrapper>
        <p className={styles.copy}>
          {copyText}
          <a href='https://www.gatsbyjs.org'>Gatsby</a>
          {byAuthor}
          <a href='https://github.com/omhoumz'>Omar Houmz</a>
        </p>
      </Wrapper>
    </footer>
  )
}

export default Footer
