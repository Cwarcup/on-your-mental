import Link from './Link'
import siteMetadata from '@/data/siteMetadata'
import SocialIcon from '@/components/social-icons'

export default function Footer() {
  return (
    <footer className="footer items-center bg-transparent p-4 text-neutral-content">
      <div className="grid-flow-col items-center">
        <SocialIcon
          kind="youtube"
          href={siteMetadata.youtube}
          hoverColor="dark:hover:text-youtubeRed"
        />
        <Link href="/">{siteMetadata.title}</Link>
        <p>{` • `}</p>
        <p>{`© ${new Date().getFullYear()}`}</p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
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
    </footer>
  )
}
