import axios from 'axios'

// gets all details of a youtube channel
// On Your Mental Podcast channelkey: UCYZNw4kprBNpxBrTcnNl_Kw

const YoutubeChannelDetails = async () => {
  const config = {
    method: 'get',
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=12&channelId=UCYZNw4kprBNpxBrTcnNl_Kw&order=date&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`,
    headers: {},
  }

  return axios(config).then((res) => res.data.items)
}

export default YoutubeChannelDetails
