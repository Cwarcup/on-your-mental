import { useState, useEffect } from 'react'
import Parser from 'rss-parser'
import ReactAudioPlayer from 'react-audio-player'

export default function EpisodeList() {
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
    return <h1>Loading episodes list...</h1>
  }

  return (
    <div>
      <div className="flex flex-col">
        {rssList.episodes.map((episode, i) => (
          <div key={episode.pubDate} className="border ">
            <p className="float-right mt-2 mb-2 mr-5">{episode.title}</p>

            <ReactAudioPlayer
              className="-ml-2 text-sm font-semibold uppercase text-gray-300"
              src={episode.enclosure.url}
              controls
              autoplay={false}
            />
          </div>
        ))}
      </div>
    </div>
  )
}
