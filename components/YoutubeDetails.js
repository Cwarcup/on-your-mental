import React, { useEffect, useState } from 'react'
import YTVideoIdDetails from '../lib/YTVideoIdDetails'
import getDescription from '../lib/utils/getDescription'

// used to fetch details of ONE specific video using the videoId
const YoutubeDetails = ({ videoId }) => {
  const [details, setDetails] = useState()
  const [episodeDescription, setEpisodeDescription] = useState()
  const [error, setError] = useState(null)

  useEffect(() => {
    // YTVideoIdDetails(videoId).then((result) => {
    //   setDetails(result.items[0])
    //   setEpisodeDescription(result.items[0].snippet.description)
    //   setEpisodeDescription(result.items[0].snippet.description)
    // })
    setEpisodeDescription(
      "AUDIO PLATFORMS:\nApple Podcasts: https://podcasts.apple.com/ca/podcast/on-your-mental/id1551290550\nSpotify: https://open.spotify.com/show/5aJjICGnbefw0hxx8qW0hm?si=q5sjcfBYTC6Ajd7KRR5kqA&nd=1\n\nIG: https://www.instagram.com/onyourmentalpod/\nTikTok: https://vm.tiktok.com/ZMd3SD8E1/\n\n10% OFF THE ART FROM NASHID CHROMA: http://nashidchroma.refr.cc/onyourmental\n\nWelcome back to On Your Mental, the podcast that encourages men to be more open and sometimes vulnerable, especially with each other. Subscribe and stick around for some great conversations!\n\nThis week’s episode takes on the topic of Long Distance Relationships. What do you think about the idea of being in one? Would you do it? Why or why not? Shandy shares her experience being in one for 3 years, while Reuben talks about just starting one (for a much shorter time). We hope you all enjoy the episode!\n\nIf there's topics you want to see discussed, leave a comment, DM on Instagram or TikTok, or email at onyourmentalpod@gmail.com 💙\n___________________________________________________________________________\n\n#MentalHealth​​ #Podcast​​ #MensMentalHealth​​ #VideoPodcast​​ #MentalHealthStigma #OnYourMental #MensHealth\n\n0:00 Intro + Crazy Frog\n4:50 Shandy’s Experience In An LDR\n14:20 Initial Thoughts On LDRs\n22:10 Haida Gwaii Story\n26:10 Trust In An LDR\n36:40 Expectation Of Time In An LDR\n46:10 Would You Do It?\n54:00 Wrap Up & Outro"
    )
  }, [videoId])

  let formattedDescription = episodeDescription.split('\n')
  // if (!details) {
  //   return <h1>Loading...</h1>
  // }

  return (
    <div>
      <>{formattedDescription}</>
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
