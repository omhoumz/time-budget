import React from 'react'
import cx from 'classnames'

import SEO from '../../components/seo/seo'
import styles from './app-page.module.css'
import Notes from '../../components/ui/notes/notes'
import SideBar from '../../components/side-bar/side-bar'
import TabBar from '../../components/tab-bar/tab-bar'

const messages = [{ message: '1' }, { message: '2' }, { message: '3' }]

const AppPage = () => {
  return (
    <main className={cx('main', styles.main)}>
      <SEO title='App' />
      <TabBar />
      <SideBar />
      <div className={styles.content}>
        <Notes date='08:00pm' messages={messages} />
        <Notes date='09:00pm' messages={messages} />
        <Notes date='10:00pm' messages={messages} />
        <Notes date='11:00pm' messages={messages} />
        <Notes date='00:00am' messages={messages} />
      </div>
    </main>
  )
}

export default AppPage
