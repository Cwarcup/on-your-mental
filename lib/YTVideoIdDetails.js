import axios from 'axios'

// get detailed response for a given video id
const YTVideoIdDetails = async (videoId) => {
  const config = {
    method: 'get',
    url: `https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}&fields=items(id,snippet(channelId,title,description,thumbnails),statistics)&part=snippet,statistics`,
    headers: {},
  }

  try {
    const response = await axios(config)
    if (response.status === 200) {
      // response - object, eg { status: 200, message: 'OK' }
      console.log('success')
      const data = await response.data
      return data
    }
  } catch (error) {
    console.log('error', error)
    return error
  }
}

export default YTVideoIdDetails
