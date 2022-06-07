import siteMetadata from '@/data/siteMetadata'
import Link from 'next/link'
import PageTitle from './PageTitle'
import SocialIcon from './social-icons'
import YoutubeEmbed from './YoutubeEmbed'

export default function Hero() {
  return (
    <div className="flex w-full flex-col">
      <div className="space-y-2 pb-4 md:space-y-5">
        <PageTitle>Welcome to On Your Mental</PageTitle>

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
        <div className="video-responsive">
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/?list=PLLlFKKLh-lgZpNlws_GGwFTAEezWY2rBn"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            title="Embedded youtube"
          />
        </div>
        <div className="mt-16 flex flex-col items-center">
          <div className="mb-3 mt-5 flex space-x-4">
            <SocialIcon kind="mail" href={`mailto:${siteMetadata.email}`} />
            <SocialIcon kind="youtube" href={siteMetadata.youtube} />
            <SocialIcon kind="tiktok" href={siteMetadata.tiktok} />
            <SocialIcon kind="instagram" href={siteMetadata.instagram} />
          </div>
        </div>
      </div>
    </div>
  )
}
