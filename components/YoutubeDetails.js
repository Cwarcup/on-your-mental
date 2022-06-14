import React, { useEffect, useState } from 'react'
import YTVideoIdDetails from '../lib/YTVideoIdDetails'
import getDescription from '../lib/utils/getDescription'

// used to fetch details of ONE specific video using the videoId
const YoutubeDetails = ({ videoId }) => {
  const [details, setDetails] = useState()
  const [episodeDescription, setEpisodeDescription] = useState()
  const [error, setError] = useState(null)

  // const details = YTVideoIdDetails(videoId).then((result) => {
  //   setEpisodeDescription(getDescription(result.data.items[0].snippet.description))
  // })
  useEffect(() => {
    YTVideoIdDetails(videoId).then((result) => {
      setDetails(result.items[0])
    })
  }, [videoId])

  if (!details) {
    return <h1>Loading...</h1>
  }

  console.log('details', details)
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
