import React from 'react'
import cx from 'classnames'

import SEO from '../../components/seo/seo'
import styles from './app-page.module.css'
import Notes from '../../components/ui/notes/notes'
import SideBar from '../../components/side-bar/side-bar'
import TabBar from '../../components/tab-bar/tab-bar'

const initialMessages = {
  1: [
    { message: 'Groceries', durationType: '30min' },
    { message: '2', durationType: '1hour' },
    { message: '3', durationType: '1hour' },
    { message: '4', durationType: '30min' },
  ],
  17: [
    { message: '1', durationType: '30min' },
    { message: '2', durationType: '1hour' },
    { message: '4', durationType: '30min' },
  ],
}

const { hours, labels: hourLabels } = (() => {
  let hours = []
  let labels = []
  for (let i = 0; i < 24; i++) {
    const hoursSufix = i < 12 ? 'am' : 'pm'
    hours.push(i)
    labels.push(
      String(i)
        .padStart(2, '0')
        .concat(' ' + hoursSufix)
    )
  }
  return { hours, labels }
})()

const AppPage = () => {
  const [messages, setMessages] = React.useState(initialMessages)

  const pushTimeSlot = ({ message, durationType, dayType }) => {
    if (!message || !durationType || !dayType) {
      console.error(
        'One or more required time slot properties were not provided in, ',
        {
          message,
          durationType,
          dayType,
        }
      )
      return null
    }
    setMessages(messages => ({
      ...messages,
      [dayType]: [...messages[dayType], { message, durationType }],
    }))
  }

  return (
    <main className={cx('main', styles.main)}>
      <SEO title='App' />
      <TabBar />
      <SideBar />
      <div className={styles.content}>
        {hours.map((hour, index) => (
          <Notes
            date={hourLabels[hour]}
            messages={messages[hour]}
            pushTimeSlot={pushTimeSlot}
            key={index}
          />
        ))}
      </div>
    </main>
  )
}

export default AppPage
