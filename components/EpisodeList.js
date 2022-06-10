import { useState, useEffect } from 'react'
import Parser from 'rss-parser'
import ReactAudioPlayer from 'react-audio-player'
import formatDate from '@/lib/utils/formatDate'
import Accordion from './Accordion'
import getDescription from '@/lib/utils/getDescription'

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
  }, [parser])

  if (!rssList) {
    return <h1>Loading episodes list...</h1>
  }

  return (
    <div>
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Listen
        </h1>
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
                className=""
                src={episode.enclosure.url}
                controls
                autoplay={false}
              />
            }
          />
        ))}
      </div>
      {/* <ul className="divide-y divide-gray-700">
        {rssList.episodes.map((episode, i) => (
          <li key={`episode-${i}`} className="py-4 ">
            <article className="space-y-2 xl:grid xl:grid-cols-4 xl:items-baseline xl:space-y-0">
              <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
                  <time dateTime={episode.pubDate}>{formatDate(episode.pubDate)}</time>
                </dd>
              </dl>
              <div className="accordion space-y-3 xl:col-span-3">
                <div className="accordion-item">
                  <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
                    <h3 className="font-semibold">{episode.title}</h3>
                    <h3 className="font-semibold">{isActive ? '-' : '+'}</h3>
                  </div>
                  {isActive && (
                    <div className="accordion-content">
                      <ReactAudioPlayer
                        id={`episode-${i}`}
                        className=""
                        src={episode.enclosure.url}
                        controls
                        autoplay={false}
                      />
                    </div>
                  )}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul> */}
    </div>
  )
}
