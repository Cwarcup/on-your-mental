import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon
            kind="mail"
            href={`mailto:${siteMetadata.email}`}
            hoverColor="dark:hover:text-primary-700"
          />
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
        </div>
        <div className="mb-2 flex space-x-2 text-sm text-gray-500 dark:text-gray-400">
          <div>{siteMetadata.author}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link href="/">{siteMetadata.title}</Link>
        </div>
        <div className="mb-8 text-sm text-gray-500 dark:text-gray-400">
          <Link href="https://github.com/cwarcup/">Created by cwarcup</Link>
        </div>
      </div>
    </footer>
  )
}
