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
    // fetchData() ////// uncomment to run

    // manually set details
    let data = {
      items: [
        {
          id: 'h5yUZ0MNXx4',
          snippet: {
            channelId: 'UCYZNw4kprBNpxBrTcnNl_Kw',
            title: 'On Your Mental #3: LIVING AND GROWING WITH DEPRESSION',
            description:
              "Hey y'all, welcome to Episode 3 of On Your Mental! This is a podcast sharing candid, open, and vulnerable conversations between men about what's on our minds. In this episode, Jesse shares his story of growing up and living with depression, how he's worked hard to get better, and how he manages it today.\n\nJesse has been clinically diagnosed and at one point in life was taking medication for Depression. He is no longer taking medication and continues to manage this mental illness better and better.\n\nThis episode is releasing on Bell Let's Talk day, and we hope that it finds people who are needing to hear a talk like this 💙\n___________________________________________________________________________\n\nI hope you all enjoy the episode! If you do, feel free to like, comment, and subscribe!\n\nAudio Versions AVAILABLE NOW!\nApple Podcasts: https://podcasts.apple.com/ca/podcast/on-your-mental/id1551290550\nSpotify: https://open.spotify.com/show/5aJjICGnbefw0hxx8qW0hm?si=q5sjcfBYTC6Ajd7KRR5kqA\n\nIG: https://www.instagram.com/onyourmentalpod/\nTwitter: https://twitter.com/OnYourMentalPod\n\n0:00 Intro\n2:38 WHAT Is Chapstick??\n3:37 What Has It Felt Like Growing Up With Depression?\n8:30 Depression Is A Rollercoaster\n15:15 Thoughts Take Over\n18:12 Did Medication/Counselling Help?\n24:01 What Led To Your Positive Change? (Trigger Warning)\n29:08 Learning The Benefits Of Routines\n34:00 Deserving Better For Yourself/Setting Small Goals\n39:45 Finding Hobbies & Improving\n46:26 Wrap Up & Summary\n\n#BellLetsTalk #MentalHealth #Podcast #MensMentalHealth #VideoPodcast #Men #Feelings #Depression #ManageDepression #MentalHealthMatters",
            thumbnails: {
              default: {
                url: 'https://i.ytimg.com/vi/h5yUZ0MNXx4/default.jpg',
                width: 120,
                height: 90,
              },
              medium: {
                url: 'https://i.ytimg.com/vi/h5yUZ0MNXx4/mqdefault.jpg',
                width: 320,
                height: 180,
              },
              high: {
                url: 'https://i.ytimg.com/vi/h5yUZ0MNXx4/hqdefault.jpg',
                width: 480,
                height: 360,
              },
              standard: {
                url: 'https://i.ytimg.com/vi/h5yUZ0MNXx4/sddefault.jpg',
                width: 640,
                height: 480,
              },
              maxres: {
                url: 'https://i.ytimg.com/vi/h5yUZ0MNXx4/maxresdefault.jpg',
                width: 1280,
                height: 720,
              },
            },
            categoryId: '22',
          },
          statistics: {
            viewCount: '1055',
            likeCount: '63',
            favoriteCount: '0',
            commentCount: '28',
          },
        },
      ],
    }
    setDetails(data)
  }, [])

  if (!details) {
    return <h1>Loading...</h1>
  }

  // let description = details.items[0].snippet.description.replace(/\n/g, `'<br />'`)
  // let description = details.items[0].snippet.description.split('\n').join('/')
  console.log(details)

  return (
    <div>
      {details.items[0].snippet.description.split('\n').map((item, index) => {
        return <p key={index}>{item}</p>
      })}
    </div>
  )
}

export default VideoDetail
