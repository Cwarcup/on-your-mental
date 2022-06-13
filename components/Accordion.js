import React, { useState, useEffect } from 'react'
import formatDate from '@/lib/utils/formatDate'
import axios from 'axios'
import secondsToTime from '@/lib/utils/secondsToTime'

const Accordion = ({ title, content, description, pubDate, guidNumber }) => {
  const [chapters, setChapters] = useState()
  const [timestamp, setTimestamp] = useState([])
  const [chapterTitle, setChapterTitle] = useState([])
  const [humanTime, setHumanTime] = useState()
  const [error, setError] = useState()
  let chaptersArr = []
  // format description
  function formatDesc(str) {
    const descriptionArr = str
      .split('<br/>')
      .filter((item) => item.replaceAll('(?i)<p[^>]*>', ' ').replaceAll('\\s+', ' ').trim())
    let index = descriptionArr.findIndex((v) => v.includes('Welcome back to On Your Mental')) + 1
    return descriptionArr[index]
  }

  const formattedDec = formatDesc(description)

  const formatGuidNumber = guidNumber.replace(/\D+/g, '')
  useEffect(() => {
    async function getTimestamps(formatGuidNumber) {
      axios
        .get(`https://feeds.buzzsprout.com/1649641/${formatGuidNumber}/chapters.json`)
        .then((res) => {
          if (res.data.chapters !== undefined) {
            setChapters(res.data.chapters)
            for (let i = 0; i < chapters.length - 1; i++) {
              // timestamp.push(secondsToTime(chapters[i].startTime))
              console.log(chapters[i].title)
              // chaptersArr.push(chapters[i].title)
            }
          }
        })
        .catch((error) => {
          console.log(error)
        })
    }

    getTimestamps(formatGuidNumber)
  }, [formatGuidNumber])
  console.log(chaptersArr)
  // console.log(timestamp)
  // console.log(chapterTitle)

  return (
    <div className=" accordion-item  py-6 ">
      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
        <time dateTime={pubDate}>{formatDate(pubDate)}</time>
      </dd>
      <h3 className="text-xl font-bold">{title}</h3>
      <details className="accordion-title ">
        <summary className="ml-6 pt-2 pb-2 text-xl font-bold">Listen</summary>
        <div className="accordion-content transform pt-4 duration-300 ease-in-out">
          {content}
          <p className="ml-8 mr-8 pt-4 text-gray-200">{formattedDec}</p>
          {chapterTitle ? (
            <ul>
              <li className="text-sm font-medium leading-5 text-gray-500 dark:text-gray-400">
                {chapterTitle}
              </li>
              <li className="text-sm font-medium leading-5 text-gray-500 dark:text-gray-400">
                {timestamp}
              </li>
            </ul>
          ) : (
            <></>
          )}
        </div>
      </details>
    </div>
  )
}

export default Accordion
