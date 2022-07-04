import formatDate from '@/lib/utils/formatDate'

const Accordion = ({ title, content, description, pubDate }) => {
  // format description
  function formatDesc(str) {
    const descriptionArr = str.split('<br/>').filter((item) =>
      item
        .replace(/[(?i)<p[^>]*>]/g, ' ')
        .replace(/[\\s+]/g, ' ')
        .trim()
    )
    let index = descriptionArr.findIndex((v) => v.includes('Welcome back to On Your Mental')) + 1
    return descriptionArr[index]
  }

  const formattedDec = formatDesc(description).replace(/<\/?p>/g, '')

  return (
    <div className="accordion-item py-4">
      <dd className="text-base font-medium leading-6 text-gray-800">
        <time dateTime={pubDate}>{formatDate(pubDate)}</time>
      </dd>
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
      <details className="accordion-title ">
        <summary className="ml-6 pt-2 text-xl font-bold text-ORMblue">Listen</summary>
        <div className="accordion-content transform pt-4 duration-300 ease-in-out">
          {content}
          <p className="ml-8 mr-8 pt-4 text-gray-900">{formattedDec}</p>
        </div>
      </details>
    </div>
  )
}

export default Accordion
