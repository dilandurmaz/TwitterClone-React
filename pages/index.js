import React from 'react'

import Layout from '../components/layout'
import Tweet from '../components/tweet'

function HomePage() {
  return (
    <Layout>
      <Tweet
          name="Dilan Durmaz"
          slug="dilandurmaz"
          datetime={new Date("2021-02-26")}
          text={`sjkljk
          aaaaaaaaaaaaaaaaaa
          
ilk tweettt ::::::::::::))))`}
      />

        <Tweet
            name="Dilan Durmaz"
            slug="dilandurmaz"
            datetime={new Date("2021-02-26")}
            text={`helloooooo  :)()()()`}
        />


    </Layout>
  )
}

export default HomePage
