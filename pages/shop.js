import React, { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import projectsData from '@/data/projectsData'
import Card from '@/components/Card'
import { PageSEO } from '@/components/SEO'
import YoutubeChannelDetails from '@/lib/youtubeChannelDetails'

export default function Episodes() {
  const [error, setError] = useState(null)
  const [details, setDetails] = useState()

  useEffect(() => {
    // var config = {
    //   method: 'get',
    //   url: `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&channelId=UCYZNw4kprBNpxBrTcnNl_Kw&order=date&key=${process.env.NEXT_PUBLIC_YOUTUBE_API_KEY}`,
    //   headers: {},
    // }

    // const fetchData = async () => {
    //   try {
    //     const result = await axios(config)
    //     setDetails(result.data.items)
    //   } catch (error) {
    //     console.log('error', error)
    //     setError(error)
    //   }
    // }
    // fetchData()

    const fetchData = async () => {
      try {
        const result = await YoutubeChannelDetails()
        setDetails(result)
      } catch (error) {
        console.log('error', error)
        setError(error)
      }
    }
    fetchData()
  }, [])

  if (!details) {
    return <h1>Loading...</h1>
  }
  console.log(details)

  return (
    <>
      <PageSEO title={`Projects - ${siteMetadata.author}`} description={siteMetadata.description} />
      <div className="divide-y divide-gray-200 dark:divide-gray-700">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Episodes
          </h1>
        </div>
        <div className="container py-12">
          <div className="-m-4 flex flex-wrap">
            {details.map((d) => (
              <Card
                key={d.snippet.title}
                title={d.snippet.title}
                description={d.snippet.description}
                imgSrc={d.snippet.thumbnails.high.url}
                href={`https://www.youtube.com/watch?v=${d.id.videoId}`}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
