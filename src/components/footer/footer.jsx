import React from 'react'

import Wrapper from '../ui/wrapper/wrapper'
import styles from './footer.module.css'

const copyText = `© ${new Date().getFullYear()}, Built with `

const byAuthor = ` by `

export const copyElement = (
  <p className={styles.copy}>
    {copyText}
    <a href='https://www.gatsbyjs.org'>Gatsby</a>
    {byAuthor}
    <a href='https://github.com/omhoumz'>Omar Houmz</a>
  </p>
)

const Footer = () => {
  return <footer className={styles.footer}>{copyElement}</footer>
}

export default Footer
