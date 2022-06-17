import Image from './Image'
import Link from './Link'

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
    <div style={{ maxWidth: '544px' }}>
      <div
        className={`${
          imgSrc && 'h-full'
        }  overflow-hidden rounded-md border-2 border-gray-200 border-opacity-60 dark:border-gray-700`}
      >
        {imgSrc &&
          (href ? (
            <Link href={href} aria-label={`Link to ${title}`}>
              <Image
                alt={title}
                src={imgSrc}
                className="object-cover object-center md:h-36 lg:h-48"
                width={544}
                height={306}
                href={href}
              />
            </Link>
          ) : (
            <Image
              alt={title}
              src={imgSrc}
              className="object-cover object-center md:h-36 lg:h-48"
              width={544}
              height={306}
              href={href}
            />
          ))}
        <div className="p-2">
          <h2 className="text-md mb-1 font-medium leading-5 tracking-tight">
            {href ? (
              <Link href={href} aria-label={`Link to ${title}`}>
                {title}
              </Link>
            ) : (
              title
            )}
          </h2>
          <p className="prose mb-1 max-w-none text-sm text-gray-500 dark:text-gray-400">
            {formattedDate}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
