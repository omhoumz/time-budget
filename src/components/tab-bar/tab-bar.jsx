import React from 'react'
import cx from 'classnames'

import styles from './tab-bar.module.css'
import LogoLink from '../logo-link/logo-link'

const TabBar = () => {
  return (
    <div className={styles.tabBar}>
      <button className={cx(styles.btnReset, styles.hum)}>
        <div className={styles.humBar}></div>
        <div className={styles.humBar}></div>
        <div className={styles.humBar}></div>
        <div className={styles.humBar}></div>
      </button>
      <LogoLink />
      {/* <span className={styles.logo}>timeBudget</span> */}
      <button className={cx(styles.btnReset, styles.help)}>?</button>
    </div>
  )
}

export default TabBar
