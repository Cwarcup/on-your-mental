import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-5 flex space-x-4">
          <SocialIcon
            kind="youtube"
            href={siteMetadata.youtube}
            hoverColor="dark:hover:text-youtubeRed"
          />
          <SocialIcon
            kind="tiktok"
            href={siteMetadata.tiktok}
            hoverColor="dark:hover:text-tiktokColor"
          />
          <SocialIcon
            kind="instagram"
            href={siteMetadata.instagram}
            hoverColor="dark:hover:text-instagramColor"
          />
          <SocialIcon
            kind="applePodcasts"
            href={siteMetadata.applePodcastLink}
            hoverColor="dark:hover:text-applePodcastsPurple"
          />
          <SocialIcon
            kind="spotify"
            href={siteMetadata.spotifyLink}
            hoverColor="dark:hover:text-spotifyGreen"
          />
        </div>
        <div className="mb-2  flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://www.cwarcup.com/">{siteMetadata.developer}</Link>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
      </div>
    </footer>
  )
}
