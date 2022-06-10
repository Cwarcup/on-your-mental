import React, { useState } from 'react'

const Accordion = ({ title, content }) => {
  const [isActive, setIsActive] = useState(false)

  return (
    <div className=" accordion-item  py-4 ">
      <div className="accordion-title" onClick={() => setIsActive(!isActive)}>
        <h3 className="font-semibold">
          {title} {isActive ? '-' : '+'}
        </h3>
      </div>
      {isActive && <div className="accordion-content pt-2">{content}</div>}
    </div>
  )
}

export default Accordion
