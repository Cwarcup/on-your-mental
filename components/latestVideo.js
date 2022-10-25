import React, { useEffect, useState } from 'react'
import axios from 'axios'
import YoutubeEmbed from './YoutubeEmbed'
import detailedYoutubeIDFetch from '../lib/detailedYoutubeIDFetch'
import getDescription from '../lib/utils/getDescription'
import Loader from '@/components/Loader'
import htmlDecode from '@/lib/htmlDecode'

const LatestVideo = () => {
  const [episodeTitle, setEpisodeTitle] = useState(null)
  const [episodeDescription, setEpisodeDescription] = useState(null)
  const [videoId, setVideoId] = useState(null)

  // get latest video from youtube, returns one video.
  // returns video id, title, short description, thumbnail
  const config = {
    method: 'get',
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&channelId=UCYZNw4kprBNpxBrTcnNl_Kw&order=date&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`,
    headers: {},
  }

  //fetches list of 1 latest video
  const fetchData = async () => {
    try {
      const fetchResult = await axios(config)

      // set videoID, used to fetch detailed video info
      setVideoId(fetchResult.data.items[0].id.videoId)
      setEpisodeTitle(fetchResult.data.items[0].snippet.title)
      const detailedDescription = await detailedYoutubeIDFetch(fetchResult.data.items[0].id.videoId) // fetch detailed video info
      const filteredDescription = getDescription(detailedDescription.items[0].snippet.description) // filter description, remove special characters
      setEpisodeDescription(filteredDescription) // set description
    } catch (error) {
      console.log('error', error)
    }
  }

  // only run once on page load
  useEffect(() => {
    fetchData()
  }, [])

  // if data is empty, show loader
  if (!videoId || !episodeTitle || !episodeDescription) {
    return (
      <div
        role="status"
        className="flex h-56 max-w-sm animate-pulse items-center justify-center rounded-lg bg-gray-300 dark:bg-gray-700"
      >
        <svg
          className="h-12 w-12 text-gray-200 dark:text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 384 512"
        >
          <path d="M361 215C375.3 223.8 384 239.3 384 256C384 272.7 375.3 288.2 361 296.1L73.03 472.1C58.21 482 39.66 482.4 24.52 473.9C9.377 465.4 0 449.4 0 432V80C0 62.64 9.377 46.63 24.52 38.13C39.66 29.64 58.21 29.99 73.03 39.04L361 215z" />
        </svg>
        <span className="sr-only">Loading...</span>
      </div>
    )
  }

  return (
    <div className="px-5">
      <YoutubeEmbed embedId={videoId} />
      <div className="pt-6 text-center text-xl font-bold text-gray-900 md:text-2xl">
        {htmlDecode(episodeTitle)}
      </div>
      {episodeDescription.map((item, index) => {
        return (
          <p className="prose m-4 max-w-none text-lg leading-7 text-gray-700" key={index}>
            {item}
          </p>
        )
      })}
    </div>
  )
}

export default LatestVideo
