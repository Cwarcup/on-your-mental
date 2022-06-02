import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import PageTitle from './PageTitle'

export default function Hero() {
  return (
    <div className="flex w-full flex-col">
      <div className="space-y-2 pb-4 md:space-y-5">
        <PageTitle>
          Welcome to On Your Mental
          {/* {' '}
          <span role="img" aria-label="waving hand" className="wave">
            ✌️
          </span> */}
        </PageTitle>
        <p className=" prose max-w-none pb-4 text-lg leading-7 text-gray-500 dark:text-gray-400">
          A podcast that shares candid and open conversations between & about men and what's on
          their minds! Ranging from something they're working on, something they're thinking about,
          to relationships or general feelings. All of it's on the table! 💙{' '}
          <Link href={`mailto:${siteMetadata.email}`}>
            <a
              className="font-medium leading-6 "
              aria-label={`Email to ${siteMetadata.email}`}
              title={`Email to ${siteMetadata.email}`}
            >
              Get in touch &rarr;
            </a>
          </Link>
        </p>
      </div>
    </div>
  )
}
