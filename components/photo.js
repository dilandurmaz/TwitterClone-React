import React from 'react'
import cn from 'classnames'

import styles from './photo.module.css'

function Photo({src="https://pbs.twimg.com/profile_images/1306611553660174337/O7MCX6gY_400x400.jpg", alt }) {
  return (
      <div className={cn([styles.photo])}>
          <img className={styles.img} src={src} alt={alt} />
      </div>


      )

}

export default Photo
