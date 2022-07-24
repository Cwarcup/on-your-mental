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
  const [data, setData] = useState()
  const [error, setError] = useState()

  // use the videoId to fetch the details of the video
  // const getAndSetSingleVideoDetails = (videoId) => {
  //   YTVideoIdDetails(videoId).then((result) => {
  //     // get the title and description of the video
  //     setEpisodeTitle(result.items[0].snippet.title)
  //     console.log('desc before any mods: ', result.items[0].snippet.description)
  //     setEpisodeDescription(getDescription(result.items[0].snippet.description))
  //   })
  // }

  useEffect(() => {
    // get latest video from youtube, returns one video.
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

        // get video ID from data
        let videoId = data[0].id.videoId
        let specificVideoDetails = YTVideoIdDetails(videoId)
        // then((result) => {
        // // get the title and description of the video
        // setEpisodeTitle(result.items[0].snippet.title)
        // console.log('desc before any mods: ', result.items[0].snippet.description)
        // setEpisodeDescription(getDescription(result.items[0].snippet.description))
        // })

        setEpisodeTitle(specificVideoDetails.items[0].snippet.title)
        // console.log('desc before any mods: ', result.items[0].snippet.description)
        setEpisodeDescription(getDescription(specificVideoDetails.items[0].snippet.description))
      } catch (error) {
        console.log('error', error)
        setError(error)
      }
    }
    fetchData()
  }, [])

  // if data is empty, show loader
  if (!data) {
    return <Loader />
  }
  let videoId = data[0].id.videoId

  console.log(episodeDescription)

  return (
    <div className="px-5">
      <YoutubeEmbed embedId={videoId} />
      <div className="pt-6 text-xl font-bold text-gray-900">{htmlDecode(episodeTitle)}</div>
      <p className="prose m-4 max-w-none text-lg leading-7 text-gray-700">
        We’ve got a banger of a Check In episode for y’all! We hope this is the perfect start to
        your week, come n hang out, get some laughs in, some good vibes, and get at it. These
        episodes are always fun to shoot, and this one’s not different. If you’re new to us, we’re
        scoring our work lives, personal lives, and mental health from 1 to 10, and having an open
        discussion about it all!
      </p>
    </div>
  )
}

export default LatestVideo
