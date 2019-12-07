import React from 'react'
import PropTypes from 'prop-types'

import styles from './notes.module.css'

const Notes = ({ messages }) => {
  return <div className={styles.notes}>{messages.map(note)}</div>
}

const note = ({ message }) => <div className={styles.note}>{message}</div>

Notes.propTypes = {
  messages: PropTypes.array.isRequired,
}

export default Notes
