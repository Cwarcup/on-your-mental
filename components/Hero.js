import React, { useEffect, useState } from 'react'
import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import PageTitle from './PageTitle'
import LatestVideo from './latestVideo'

export default function Hero() {
  const [latestVideo, setLatestVideo] = useState()
  const [latestVideoDescription, setLatestVideoDescription] = useState()

  //getDescription
  function getDescription(str) {
    const descriptionArr = str.split('\n').filter((item) => item)
    let index = descriptionArr.findIndex((v) => v.includes('Welcome back to On Your Mental')) + 1
    return descriptionArr[index]
  }

  return (
    <div className="flex w-full flex-col">
      <div className="space-y-2 pb-4 md:space-y-5">
        <PageTitle>Welcome to On Your Mental</PageTitle>

        <p className=" prose max-w-none pb-4 text-lg leading-7 text-gray-500 dark:text-gray-400">
          A podcast that shares candid and open conversations between & about men and what's on
          their minds! Ranging from something they're working on, something they're thinking about,
          to relationships or general feelings. All of it's on the table! 💙
        </p>
        <h3 className="flex pb-6 text-2xl font-extrabold tracking-tight text-gray-900 dark:text-gray-100 sm:text-3xl md:text-5xl">
          Latest Episode
        </h3>
        <LatestVideo />
      </div>
    </div>
  )
}
