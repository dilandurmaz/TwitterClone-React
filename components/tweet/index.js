import React from 'react'
import formatDistanceToNowStrict from 'date-fns/formatDistanceToNowStrict'
import styles from './style.module.css'
import Photo from '../photo'
import IconButton from '../icon'
import * as Icon from '../icons'
import Loading from '../loading/index'

function Tweet({ created_at,
                 retweet_count,
               favorite_count,
               retweeted,
               favorited,
               text,
               user
}) {


  return (

    <article className={styles.tweet}>

      <div className={styles.avatar}>
        <Photo  src={user.profile_img_url_https}/>
      </div>

      <div className={styles.body}>
        <header className={styles.header}>
          <span className={styles.name}>{user.name}</span>
          <span>@{user.screen_name}</span> .{' '}
          <span>{formatDistanceToNowStrict(new Date(created_at))}</span>
        </header>

        <div className={styles.content}>
            {text}
        </div>

        <footer className={styles.footer}>
            <div className={styles.footerButton}>
                <IconButton className={styles.actionButton}>
                    <Icon.Reply/>
                </IconButton>
              {false && <span>3</span> }
            </div>

            <div className={styles.footerButton}>
                <IconButton className={styles.actionButton}>
                    <Icon.Retweet/>
                </IconButton>
              {retweet_count && <span>{retweet_count}</span>}
            </div>

            <div className={styles.footerButton}>
                <IconButton className={styles.actionButton}>
                    <Icon.Like/>
                </IconButton>
              {favorite_count && <span>{favorite_count}</span>}
            </div>

            <div className={styles.footerButton}>
                <IconButton className={styles.actionButton}>
                    <Icon.Share/>
                </IconButton>
            </div>
        </footer>
      </div>
    </article>
  )
}

export default Tweet
