import React from 'react'

import styles from './note.module.css'

const Note = ({ message, durationType }) => (
  <div className={styles.note}>
    <span>{message}</span>
    <span className={styles.durationType}>{durationType}</span>
  </div>
)

export default Note
