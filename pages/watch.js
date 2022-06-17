import React, { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import YoutubeChannelDetails from '@/lib/youtubeChannelDetails'
import ApiClient from '@/lib/apiClient'
import AudioSocials from '@/components/AudioSocials'
import Loader from '@/components/Loader'
import LatestVideo from '@/components/latestVideo'

export default function Episodes() {
  const [details, setDetails] = useState()
  const [latestVideo, setLatestVideo] = useState()
  const [latestVideoDescription, setLatestVideoDescription] = useState()

  useEffect(() => {
    const fetchVideosList = async () => {
      try {
        const result = await YoutubeChannelDetails()
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

    const fetchLatestVideo = async () => {
      try {
        const result = await ApiClient(
          'https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=K9PQ6IoMXpA&key='
        )
        setLatestVideo(result)
        const description = await result
        const formattedDesc = getDescription(description[0].snippet.description)
        setLatestVideoDescription(formattedDesc)
      } catch (error) {
        console.log('error', error)
      }
    }
    fetchLatestVideo()
  }, [])

  if (!details || !latestVideo) {
    return <Loader />
  }

  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="flex flex-col divide-y divide-gray-700 sm:content-center">
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
          <div className=" flex flex-wrap sm:justify-center">
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
