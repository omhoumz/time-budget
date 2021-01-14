import React from 'react'
import PropTypes from 'prop-types'

import Note from '../note/note'
import styles from './notes.module.css'

const Notes = ({ messages, date, pushTimeSlot }) => {
  const onClickAdd = () => {
    pushTimeSlot({
      message: new Date().toISOString(),
      durationType: '1hour',
      dayType: 1,
    })
  }

  return messages ? (
    <div className={styles.notesWrapper}>
      <div className={styles.timeColumn}>
        <h3 className={styles.notesTime}>{date}</h3>
        <button className={styles.addBtn} onClick={onClickAdd}>
          +
        </button>
      </div>
      <div className={styles.notes}>
        {messages.map((note, index) => (
          <Note
            message={note.message}
            durationType={note.durationType}
            key={index}
          />
        ))}
      </div>
    </div>
  ) : null
}

Notes.propTypes = {
  messages: PropTypes.array.isRequired,
}

export default Notes
