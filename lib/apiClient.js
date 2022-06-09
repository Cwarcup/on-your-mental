import axios from 'axios'

// gets all details of a youtube channel
// On Your Mental Podcast channelkey: UCYZNw4kprBNpxBrTcnNl_Kw

const ApiClient = async (path) => {
  const config = {
    method: 'get',
    url: path + `${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`,
    headers: {},
  }

  return axios(config).then((res) => res.data.items)
}

export default ApiClient
