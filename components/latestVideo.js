import React, { useEffect, useState } from 'react'
import axios from 'axios'
import YoutubeEmbed from './YoutubeEmbed'
import YTVideoIdDetails from '../lib/YTVideoIdDetails'
import getDescription from '../lib/utils/getDescription'
import AudioSocials from '@/components/AudioSocials'
import Loader from '@/components/Loader'

const LatestVideo = () => {
  const [episodeTitle, setEpisodeTitle] = useState()
  const [episodeDescription, setEpisodeDescription] = useState()
  const [data, setData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const config = {
      method: 'get',
      url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=1&channelId=UCYZNw4kprBNpxBrTcnNl_Kw&order=date&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`,
      headers: {},
    }

    //fetches list of 1 latest video
    const fetchData = async () => {
      try {
        const result = await axios(config)
        setData(result.data.items)
      } catch (error) {
        console.log('error', error)
        setError(error)
      }
    }
    fetchData()
  }, [])

  if (!data) {
    return <Loader />
  }

  // use the videoId to fetch the details of the video
  let videoId = data[0].id.videoId
  const details = YTVideoIdDetails(videoId).then((result) => {
    setEpisodeTitle(result.items[0].snippet.title)
    setEpisodeDescription(getDescription(result.items[0].snippet.description))
  })

  return (
    <>
      <YoutubeEmbed embedId={videoId} />
      <div className="text-xl font-bold text-gray-100">{episodeTitle}</div>

      <p className="prose m-4 max-w-none pb-4 text-lg leading-7 text-gray-400">
        {episodeDescription}
      </p>
      <AudioSocials
        applePodcastLink={
          'https://stackoverflow.com/questions/55622768/uncaught-invariant-violation-rendered-more-hooks-than-during-the-previous-rende'
        }
        youtubeLink={`https://www.youtube.com/watch?v=${videoId}`}
      />
    </>
  )
}

export default LatestVideo
