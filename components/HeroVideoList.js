import React, { useEffect, useState } from 'react'
import Card from '@/components/Card'
import apiHeroYoutubeList from '@/lib/apiHeroYoutubeList'
import Loader from '@/components/Loader'
import LatestVideo from '@/components/latestVideo'

export default function HeroVideoList() {
  const [details, setDetails] = useState()

  useEffect(() => {
    // gets list of videos from youtube channel
    // returns lst of 7 most recent videos
    const fetchVideosList = async () => {
      try {
        const result = await apiHeroYoutubeList()
        setDetails(result)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchVideosList()

    // get description from latest video
    // should only contain relevant information about the episode
    function getDescription(str) {
      const descriptionArr = str.split('\n').filter((item) => item)
      let index = descriptionArr.findIndex((v) => v.includes('Welcome back to On Your Mental')) + 1
      return descriptionArr[index]
    }
  }, [])

  if (!details) {
    return <Loader />
  }

  return (
    <>
      <div className="flex flex-col items-center divide-y divide-gray-700 sm:content-center">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Latest Episode
          </h1>
          <LatestVideo />
        </div>
        <div className="container py-12 ">
          <h3 className="flex pb-6 text-2xl font-extrabold tracking-tight text-gray-100 sm:text-3xl md:text-5xl">
            Previous Episodes
          </h3>
          <div className="grid justify-center gap-2 md:grid-cols-3">
            {details.slice(1).map((d) => (
              <Card
                key={d.snippet.title}
                title={d.snippet.title}
                publishedAt={d.snippet.publishedAt}
                imgSrc={d.snippet.thumbnails.medium.url}
                href={`https://www.youtube.com/watch?v=${d.id.videoId}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
