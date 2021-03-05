import React from 'react'

import styles from './style.module.css'
import Photo from '../photo'
function TweetModal() {
  return (
    <div className={styles.overlay}>
      <div className={styles.modal}>
        <div className={styles.avatar}>
          <Photo />
        </div>
        <div className={styles.body}>
          <textarea className={styles.textarea} name="" rows="6" />
        </div>
      </div>
    </div>
  )
}

export default TweetModal
