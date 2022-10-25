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
  const [error, setError] = useState(null)

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
      setError(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  console.log('episodeTitle', episodeTitle)
  console.log('episodeDescription', episodeDescription)
  console.log('videoId', videoId)

  // if data is empty, show loader
  if (!videoId || !episodeTitle || !episodeDescription) {
    return <Loader />
  }

  return (
    <div className="px-5">
      <YoutubeEmbed embedId={videoId} />
      <div className="pt-6 text-xl font-bold text-gray-900">{htmlDecode(episodeTitle)}</div>
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
