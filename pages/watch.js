import React, { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import YoutubeChannelDetails from '@/lib/youtubeChannelDetails'
import Loader from '@/components/Loader'

export default function Episodes() {
  const [details, setDetails] = useState()

  useEffect(() => {
    // gets list of videos from youtube channel
    //gets 21 most recent videos
    const fetchVideosList = async () => {
      try {
        const result = await YoutubeChannelDetails()
        setDetails(result)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchVideosList()
  }, [])

  if (!details) {
    return <Loader />
  }

  return (
    <>
      <PageSEO
        title="Recent episodes - On Your Mental"
        description="List of recent episodes from On Your Mental Podcast"
      />

      <div className="flex flex-col items-center divide-y divide-gray-700 sm:content-center">
        <div className="container py-12 ">
          <h3 className="flex pb-6 text-2xl font-extrabold tracking-tight text-gray-100 sm:text-3xl md:text-5xl">
            Recent Episodes
          </h3>
          <div className="grid justify-center gap-2 md:grid-cols-3">
            {details.map((d) => (
              <Card
                key={d.snippet.title}
                title={d.snippet.title}
                publishedAt={d.snippet.publishedAt}
                imgSrc={d.snippet.thumbnails.high.url}
                href={`https://www.youtube.com/watch?v=${d.id.videoId}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
