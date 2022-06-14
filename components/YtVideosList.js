import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '@/components/Loader'

const VideosList = () => {
  const [error, setError] = useState(null)
  const [details, setDetails] = useState()

  useEffect(() => {
    var config = {
      method: 'get',
      url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&channelId=UCYZNw4kprBNpxBrTcnNl_Kw&order=date&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`,
      headers: {},
    }

    const fetchData = async () => {
      try {
        const result = await axios(config)
        setDetails(result.data.items)
      } catch (error) {
        console.log('error', error)
        setError(error)
      }
    }
    fetchData()
  }, [])

  if (!details) {
    return <Loader />
  }
  console.log(details)
  return <div></div>
}

export default VideosList
