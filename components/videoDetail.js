import React, { useEffect, useState } from 'react'
import axios from 'axios'

const VideoDetail = ({ videoId }) => {
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

  // let description = details.items[0].snippet.description.replace(/\n/g, `'<br />'`)
  // let description = details.items[0].snippet.description.split('\n').join('/')
  console.log(details)
  // remove all -- from description
  let filteredDescription = details.items[0].snippet.description
    .replace(/___________________________________________________________________________/g, '')
    .split('\n')

  return (
    <div>
      {filteredDescription.map((item, index) => {
        return <p key={index}>{item}</p>
      })}
    </div>
  )
}

export default VideoDetail
