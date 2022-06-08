import React, { useEffect, useState } from 'react'
import axios from 'axios'

const VideoDetail = () => {
  const [error, setError] = useState(null)
  const [details, setDetails] = useState()

  console.log(process.env.NEXT_PUBLIC_YOUTUBE_API_KEY)

  const videoId = 'h5yUZ0MNXx4'

  useEffect(() => {
    var config = {
      method: 'get',
      url: `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&fields=items(id,snippet(channelId,title,categoryId,description),statistics)&part=snippet,statistics`,
      headers: {},
    }

    const fetchData = async () => {
      try {
        const result = await axios(config)
        setDetails(result.data)
      } catch (error) {
        console.log('error', error)
        setError(error)
      }
    }
    fetchData()
  }, [])

  if (!details) {
    return <h1>Loading...</h1>
  }
  console.log(details)
  // console.log(details.items[0].snippet.description) // error here. TypeError: Cannot read properties of null (reading 'items')

  return (
    <div>
      <h1>Video Detail</h1>
      <p>{details.items[0].snippet.description}</p>
    </div>
  )
}

export default VideoDetail
