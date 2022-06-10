// get rss episodes from URL
// converts xml to json

import { useState, useEffect } from 'react'
import Parser from 'rss-parser'

export default function App() {
  const parser = new Parser()
  const [rssList, setRssList] = useState()

  useEffect(() => {
    const fetchData = async () => {
      try {
        const feed = await parser.parseURL('https://feeds.buzzsprout.com/1649641.rss')
        setRssList({
          episodes: feed.items,
          program_title: feed.title,
          program_image: feed.image.url,
          program_description: feed.description,
        })
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [])

  if (!rssList) {
    return <h1>Loading RSS Feed...</h1>
  }
  console.log(rssList)

  return <div></div>
}
