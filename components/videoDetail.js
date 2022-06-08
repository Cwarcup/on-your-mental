import React, { useEffect, useState } from 'react'
import axios from 'axios'

function VideoDetail() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState(null)

  var config = {
    method: 'get',
    url: `https://www.googleapis.com/youtube/v3/search?channelId=UCYZNw4kprBNpxBrTcnNl_Kw&part=snippet&order=date&maxResults=2&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`,
    headers: {},
  }

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data))
    })
    // .then((response) => response.json())
    // .then((responseData) => setItems(responseData.items))
    .catch(function (error) {
      console.log(error)
    })

  console.log(items)

  return (
    <div>
      <h1>Video Detail</h1>
    </div>
  )
}

export default VideoDetail
