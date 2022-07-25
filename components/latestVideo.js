import React, { useEffect, useState } from 'react'
import axios from 'axios'
import YoutubeEmbed from './YoutubeEmbed'
import YTVideoIdDetails from '../lib/YTVideoIdDetails'
import getDescription from '../lib/utils/getDescription'
import Loader from '@/components/Loader'
import htmlDecode from '@/lib/htmlDecode'

const LatestVideo = () => {
  const [episodeTitle, setEpisodeTitle] = useState()
  const [episodeDescription, setEpisodeDescription] = useState()
  const [videoId, setVideoId] = useState()
  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    fetchData()
  }, [])

  // get latest video from youtube, returns one video.
  const config = {
    method: 'get',
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&channelId=UCYZNw4kprBNpxBrTcnNl_Kw&order=date&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`,
    headers: {},
  }

  //fetches list of 1 latest video
  const fetchData = async () => {
    try {
      const fetchResult = await axios(config)
      setData(fetchResult.data.items)
      setVideoId(fetchResult.data.items[0].id.videoId)
      setEpisodeTitle(fetchResult.data.items[0].snippet.title)

      const description = await getVideoDetails(fetchResult.data.items[0].id.videoId)
    } catch (error) {
      console.log('error', error)
      setError(error)
    }
  }

  const getVideoDetails = async (videoId) => {
    const result = await YTVideoIdDetails(videoId)
    console.log('YTVideoIdDetails result: ', result)
    const filteredDescription = getDescription(result.items[0].snippet.description)
    setEpisodeDescription(filteredDescription)
  }

  // if data is empty, show loader
  if (!data || !videoId || !episodeTitle || !episodeDescription) {
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
