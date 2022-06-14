import react, { useEffect, useState } from 'react'
import YTVideoIdDetails from '@/lib/YTVideoIdDetails'

const YoutubeDescription = ({ videoId }) => {
  const [data, setData] = useState()

  useEffect(() => {
    // You need to restrict it at some point
    // This is just dummy code and should be replaced by actual
    if (!data) {
      YTVideoIdDetails().then((result) => {
        setData(result)
      })
    }
  }, [])

  if (!data) {
    return <h1>Loading...</h1>
  }
  console.log(data)

  return <div>full return</div>
}

export default YoutubeDescription
