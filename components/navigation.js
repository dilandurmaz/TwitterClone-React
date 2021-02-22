import React from 'react'

import styles from './navigation.module.css'
import NavigationButton from './navigation-button'
import TextTitle from './text-title'

import {
  Twitter,
  Home,
  Explore,
  Notification,
  Messages,
  Bookmark,
  Lists,
  Profile,
  More
} from './icons'

const MENU = [
    {
        key: "twitter",
        icon: <Twitter/>,
        iconSelected: <Twitter/>,
        title: "",
        notify:0
    },
    {
        key: "home",
        icon: <Home/>,
        iconSelected: <Home/>,
        title: "Home",
        notify:0
    },
    {
        key: "explore",
        icon: <Explore/>,
        iconSelected: <Explore/>,
        title: "Explore",
        notify:0
    },
    {
        key: "notification",
        icon: <Notification/>,
        iconSelected: <Notification/>,
        title: "Notification",
        notify:17
    },
    {
        key: "messages",
        icon: <Messages/>,
        iconSelected: <Messages/>,
        title: "Messages",
        notify:0
    },
    {
        key: "bookmark",
        icon: <Bookmark/>,
        iconSelected: <Bookmark/>,
        title: "Bookmark",
        notify:0
    },
    {
        key: "lists",
        icon: <Lists/>,
        iconSelected: <Lists/>,
        title: "Lists",
        notify:0
    },
    {
        key: "profile",
        icon: <Profile/>,
        iconSelected: <Profile/>,
        title: "Profile",
        notify:0
    },
    {
        key: "more",
        icon: <More/>,
        iconSelected: <More/>,
        title: "More",
        notify:0
    }

]

function Navigation({flat=false, selectedKey='home'}) {
  return (
    <nav className={styles.nav}>
        {MENU.map((menu)=> {
            const showTitle = !flat && menu.title.length > 0
            const selected = selectedKey===menu.key
            return(
                <NavigationButton
                    key={menu.key}
                    notify={menu.notify}
                    selected={selected}
                >
                    {selected ? menu.iconSelected : menu.icon}
                    { showTitle && <TextTitle>{menu.title}</TextTitle> }
                </NavigationButton>
            )
        })}
    </nav>
  )
}

export default Navigation
