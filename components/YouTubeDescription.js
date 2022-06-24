import { useEffect, useState } from 'react'
import axios from 'axios'
import Loader from '@/components/Loader'

const YoutubeDescription = ({ videoId }) => {
  const [data, setData] = useState()
  const [fullDescription, setFullDescription] = useState()

  // gets data from youtube api
  const getDescription = async (videoId) => {
    const config = {
      method: 'get',
      url: `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&fields=items(id,snippet(channelId,title,description,thumbnails),statistics)&part=snippet,statistics`,
      headers: {},
    }

    const response = await axios(config)
    const data = await response.data
    setData(data)
    setFullDescription(data.items[0].snippet.description)
  }

  useEffect(() => {
    getDescription(videoId)
  }, [videoId])

  if (!data || !fullDescription) {
    return <Loader />
  }

  return (
    <div className="mt-3">
      {fullDescription.split('\n').map((item, index) => {
        return <p key={index}>{item}</p>
      })}
    </div>
  )
}

export default YoutubeDescription
