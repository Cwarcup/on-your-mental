import React, { useEffect, useState } from 'react'
import axios from 'axios'
import YTVideoIdDetails from '@/lib/YTVideoIdDetails'

// used to fetch details of ONE specific video using the videoId

const YoutubeDetails = ({ videoId }) => {
  const [error, setError] = useState(null)
  const [details, setDetails] = useState()

  useEffect(() => {
    try {
      setDetails(YTVideoIdDetails(videoId).data)
    } catch (error) {
      setError(error)
    }
  }, [videoId])

  if (!details) {
    return <h1>Loading...</h1>
  }
  console.log(details)
  return (
    <div>
      test
      {/* {details.description
        .replace(/___________________________________________________________________________/g, '')
        .split('\n')
        .map((item, index) => {
          return (
            <>
              {' '}
              key={index}>{item}
            </>
          )
        })} */}
    </div>
  )
}

export default YoutubeDetails
