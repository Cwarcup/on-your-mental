import React, { useState } from 'react'
import formatDate from '@/lib/utils/formatDate'

const Accordion = ({ title, content, description, pubDate }) => {
  const [isActive, setIsActive] = useState(false)

  // format description
  function formatDesc(str) {
    const descriptionArr = str
      .split('<br/>')
      .filter((item) => item.replaceAll('(?i)<p[^>]*>', ' ').replaceAll('\\s+', ' ').trim())
    let index = descriptionArr.findIndex((v) => v.includes('Welcome back to On Your Mental')) + 1
    return descriptionArr[index]
  }

  const formattedDec = formatDesc(description)

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
        </div>
      </details>
    </div>
  )
}

export default Accordion
