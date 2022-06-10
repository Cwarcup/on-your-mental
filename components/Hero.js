import React, { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import PageTitle from './PageTitle'
import ApiClient from '@/lib/apiClient'
import AudioSocials from '@/components/AudioSocials'

export default function Hero() {
  const [latestVideo, setLatestVideo] = useState()
  const [latestVideoDescription, setLatestVideoDescription] = useState()

  useEffect(() => {
    const fetchLatestVideo = async () => {
      try {
        const result = await ApiClient(
          'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=K9PQ6IoMXpA&key='
        )
        setLatestVideoDescription(result[0].snippet.description)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchLatestVideo()
  }, [])

  //getDescription
  function getDescription(str) {
    const descriptionArr = str.split('\n').filter((item) => item)
    let index = descriptionArr.findIndex((v) => v.includes('Welcome back to On Your Mental')) + 1
    return descriptionArr[index]
  }

  if (!latestVideoDescription) {
    return <h1>Loading...</h1>
  }

  console.log('latestVideo', latestVideoDescription)

  const description = getDescription(latestVideoDescription)
  console.log(description)

  return (
    <div className="flex w-full flex-col">
      <div className="space-y-2 pb-4 md:space-y-5">
        <PageTitle>Welcome to On Your Mental</PageTitle>

        <p className=" prose max-w-none pb-4 text-lg leading-7 text-gray-500 dark:text-gray-400">
          A podcast that shares candid and open conversations between & about men and what's on
          their minds! Ranging from something they're working on, something they're thinking about,
          to relationships or general feelings. All of it's on the table! 💙
        </p>
        <h3 className="flex pb-6 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          Latest Episode
        </h3>
        <div className="video-responsive">
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/?list=PLLlFKKLh-lgZpNlws_GGwFTAEezWY2rBn"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
      </div>
      <div className="prose max-w-none pb-4 pt-4 text-xl leading-7 text-gray-100">
        <p className=" prose max-w-none pb-4 text-lg leading-7 text-gray-400">{description}</p>
        <AudioSocials />
      </div>
    </div>
  )
}
