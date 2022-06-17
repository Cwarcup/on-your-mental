import { useState, useEffect } from 'react'
import Parser from 'rss-parser'
import ReactAudioPlayer from 'react-audio-player'
import Accordion from './Accordion'
import Loader from '@/components/Loader'

export default function EpisodeList() {
  const parser = new Parser()
  const [rssList, setRssList] = useState()

  // initial load to fetch data
  useEffect(() => {
    const fetchData = async () => {
      try {
        const feed = await parser.parseURL('https://feeds.buzzsprout.com/1649641.rss')
        setRssList({
          episodes: feed.items,
          program_title: feed.title,
          program_description: feed.description,
        })
      } catch (error) {
        console.log('error', error)
      }
    }

    fetchData()
  }, [])

  if (!rssList) {
    return <Loader />
  }

  return (
    <>
      <div className="accordion divide-y divide-gray-700">
        {rssList.episodes.map((episode, index) => (
          <Accordion
            key={index}
            title={episode.title}
            description={episode.content}
            pubDate={episode.pubDate}
            content={
              <ReactAudioPlayer
                id={`episode-${index}`}
                className="m-auto"
                src={episode.enclosure.url}
                controls
                autoplay={false}
              />
            }
            guidNumber={episode.guid}
          />
        ))}
      </div>
    </>
  )
}
