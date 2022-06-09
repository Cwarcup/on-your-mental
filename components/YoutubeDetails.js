import React, { useEffect, useState } from 'react'
import axios from 'axios'

// used to fetch details of ONE specific video using the videoId

const YoutubeDetails = ({ videoId }) => {
  const [error, setError] = useState(null)
  const [details, setDetails] = useState()

  useEffect(() => {
    var config = {
      method: 'get',
      url: `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&fields=items(id,snippet(channelId,title,categoryId,description,thumbnails),statistics)&part=snippet,statistics`,
      headers: {},
    }

    const fetchData = async () => {
      try {
        const result = await axios(config)
        setDetails(result.data.items[0].snippet)
      } catch (error) {
        console.log('error', error)
        setError(error)
      }
    }
    fetchData()
  }, [videoId])

  if (!details) {
    return <h1>Loading...</h1>
  }
  return (
    <div>
      {details.description
        .replace(/___________________________________________________________________________/g, '')
        .split('\n')
        .map((item, index) => {
          return <p key={index}>{item}</p>
        })}
    </div>
  )
}

export default YoutubeDetails
