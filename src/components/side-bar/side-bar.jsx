import React from 'react'
import { Link } from 'gatsby'

import styles from './side-bar.module.css'
import { copyElement } from '../../components/footer/footer'
import LogoLink from '../logo-link/logo-link'

const navItemsContent = [
  { label: 'weekday', link: '/app#weekend' },
  { label: 'weekend', link: '/app#weekday' },
]

const linkItemsContent = [
  { label: 'about', link: '/about' },
  { label: 'help', link: '/help' },
]

const navItem = ({ label, link }, index) => (
  <Link to={link} className={styles.navItem} key={index}>
    {label}
  </Link>
)

const linkItem = ({ label, link }, index) => (
  <Link to={link} className={styles.linkItem} key={index}>
    {label}
  </Link>
)

const SideBar = () => {
  return (
    <div className={styles.side}>
      <div className={styles.nav}>
        <LogoLink classes={styles.sidebarLogo} />
        {navItemsContent.map(navItem)}
      </div>
      <div className={styles.links}>
        {linkItemsContent.map(linkItem)}
        {copyElement}
      </div>
    </div>
  )
}

export default SideBar
