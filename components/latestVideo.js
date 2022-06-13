import React, { useEffect, useState } from 'react'
import axios from 'axios'
import YoutubeEmbed from './YoutubeEmbed'
import YTVideoIdDetails from '../lib/YTVideoIdDetails'

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
    return <h1>Loading...</h1>
  }

  let videoId = data[0].id.videoId
  const details = YTVideoIdDetails(videoId).then((result) => {
    setEpisodeTitle(result.data.items[0].snippet.title)
    setEpisodeDescription(result.data.items[0].snippet.description)
  })
  console.log(episodeDescription)

  return (
    <>
      <YoutubeEmbed embedId={videoId} />

      <div className="prose max-w-none pb-4 pt-4 text-xl leading-7 text-gray-100">
        <p className=" prose max-w-none pb-4 text-lg leading-7 text-gray-400">
          {episodeDescription}
        </p>
      </div>
    </>
  )
}

export default LatestVideo
