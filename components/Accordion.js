import React, { useState } from 'react'
import getDescription from '@/lib/utils/getDescription'
import formatDate from '@/lib/utils/formatDate'

const Accordion = ({ title, content, description, pubDate }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className=" accordion-item  py-6 ">
      <dd className="text-base font-medium leading-6 text-gray-500 dark:text-gray-400">
        <time dateTime={pubDate}>{formatDate(pubDate)}</time>
      </dd>
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h3 className="text-xl font-bold">{title}</h3>
        <div className="pt-2"> {isActive ? 'Close' : 'Expand'}</div>
      </div>
      {isActive && (
        <div className="accordion-content pt-4">
          {content}
          <p className="text-gray-200">{description}</p>
        </div>
      )}
    </div>
  )
}

export default Accordion
