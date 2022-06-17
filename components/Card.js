import Image from './Image'
import Link from './Link'
import he from 'he'

const Card = ({ title, publishedAt, imgSrc, href }) => {
  const date = new Date(publishedAt)
  const options = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  }
  const formattedDate = date.toLocaleDateString('en-US', options)

  return (
    <div className="grid h-fit grid-cols-2 grid-rows-1 items-center gap-2 md:auto-rows-auto md:grid-cols-1 md:items-start">
      <div className="col-start-1 col-end-2 row-start-1 md:col-span-2 md:col-start-1 md:row-start-1 md:row-end-2">
        <Link href={href} aria-label={`Link to ${title}`}>
          <Image
            alt={title}
            src={imgSrc}
            className="absolute inset-0 h-fit w-full  object-cover object-center"
            width={544}
            height={306}
            href={href}
          />
        </Link>
      </div>
      <div className="p-2 md:col-span-1 md:col-start-2 md:row-start-2 md:row-end-3">
        <h2 className="text-md mb-1  font-medium leading-5 tracking-tight">
          <Link href={href} aria-label={`Link to ${title}`}>
            {he.decode(title)}
          </Link>
        </h2>
        <p className="prose mb-1 text-sm text-gray-500 dark:text-gray-400">{formattedDate}</p>
      </div>
    </div>
  )
}

export default Card
