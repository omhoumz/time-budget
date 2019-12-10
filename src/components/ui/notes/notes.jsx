import React from 'react'
import PropTypes from 'prop-types'

import styles from './notes.module.css'

const Notes = ({ messages, date }) => {
  return (
    <div className={styles.notesWrapper}>
      <div className={styles.timeColumn}>
        <h3 className={styles.notesTime}>{date}</h3>
        <button className={styles.addBtn}>+</button>
      </div>
      <div className={styles.notes}>{messages.map(note)}</div>
    </div>
  )
}

const note = ({ message }, index) => (
  <div className={styles.note} key={index}>
    {message}
  </div>
)

Notes.propTypes = {
  messages: PropTypes.array.isRequired,
}

export default Notes
