import React, { useEffect, useState } from 'react'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import YoutubeChannelDetails from '@/lib/youtubeChannelDetails'
import Loader from '@/components/Loader'

export default function Episodes() {
  const [details, setDetails] = useState()

  useEffect(() => {
    // gets list of videos from youtube channel
    //gets 12 most recent videos
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
      <div className="flex flex-col sm:content-center ">
        <div className="space-y-2 py-4 md:space-y-5">
          <div className="divide-y divide-gray-700">
            <h1 className="pb-2 text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
              Recent Episodes
            </h1>
            <div className="grid justify-center gap-2 pt-2 md:grid-cols-3">
              {details.map((d) => (
                <div
                  key={d.snippet.title}
                  className="mt-5 rounded-lg bg-gradient-to-b from-gray-900  to-ORMblue p-1 shadow-lg"
                >
                  <Card
                    key={d.snippet.title}
                    title={d.snippet.title}
                    publishedAt={d.snippet.publishedAt}
                    imgSrc={d.snippet.thumbnails.high.url}
                    href={`https://www.youtube.com/watch?v=${d.id.videoId}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
