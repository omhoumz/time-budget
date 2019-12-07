import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'

import SEO from '../../components/seo/seo'
import styles from './app-page.module.css'
import { copyElement } from '../../components/footer/footer'
import Notes from '../../components/ui/notes/notes'

const navItemsContent = [
  { label: 'weekday', link: '/app#weekday' },
  { label: 'weekend', link: '/app#weekend' },
]

const linkItemsContent = [
  { label: 'about', link: '/about' },
  { label: 'help', link: '/help' },
]

const navItem = ({ label, link }) => (
  <Link to={link} className={styles.navItem}>
    {label}
  </Link>
)

const linkItem = ({ label, link }) => (
  <Link to={link} className={styles.linkItem}>
    {label}
  </Link>
)

const messages = [{ message: '1' }, { message: '2' }, { message: '3' }]

const AppPage = () => {
  return (
    <main className={cx('main', styles.main)}>
      <SEO title='App' />
      <div className={styles.side}>
        <div className={styles.nav}>
          <Link className={styles.logo}>
            time<strong>Budget</strong>
          </Link>
          {navItemsContent.map(navItem)}
        </div>
        <div className={styles.links}>
          {linkItemsContent.map(linkItem)}
          {copyElement}
        </div>
      </div>
      <div className={styles.content}>
        <Notes messages={messages} />
      </div>
    </main>
  )
}

export default AppPage
