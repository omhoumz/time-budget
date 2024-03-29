import React from 'react'
import cx from 'classnames'
import { Link } from 'gatsby'

import SEO from '../../components/seo/seo'
import Wrapper from '../../components/ui/wrapper/wrapper'
import styles from './index-page.module.css'

const IndexPage = () => {
  return (
    <main className={cx('main', styles.wrapper)}>
      <Wrapper comp='div'>
        <SEO title='Home' />
        <h1>Hi people</h1>
        <p>This is a time budget app.</p>
        <p>Nowing that this is a work in progress.</p>
        <p>
          Would you like to <Link to='/app'>Go to the app</Link> And try it out?
        </p>
      </Wrapper>
    </main>
  )
}

export default IndexPage
