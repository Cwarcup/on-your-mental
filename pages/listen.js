import { useState, useEffect } from 'react'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import Parser from 'rss-parser'
import ReactAudioPlayer from 'react-audio-player'
import Accordion from '@/components/Accordion'
import Loader from '@/components/Loader'
import AudioSocials from '@/components/AudioSocials'

export default function ListenEpisodes() {
  const [rssList, setRssList] = useState()

  // initial load to fetch data
  useEffect(() => {
    const fetchData = async () => {
      const parser = new Parser()
      const feed = await parser.parseURL('https://feeds.buzzsprout.com/1649641.rss')
      setRssList({
        episodes: feed.items,
        program_title: feed.title,
        program_description: feed.description,
      })
    }
    fetchData()
  }, [])

  if (!rssList) {
    return <Loader />
  }
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="space-y-2 pt-6 pb-1 md:space-y-5">
        <div className="divide-y divide-gray-700">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Listen
          </h1>
          <AudioSocials className="pt-4" />
        </div>
      </div>
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
