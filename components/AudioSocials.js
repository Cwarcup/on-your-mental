import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

export default function AudioSocials(applePodcastLink, spotifyLink, overcastLink, castroLink) {
  return (
    <>
      <div className="mt-16 flex flex-col items-center">
        <h3> Audio versions available below!</h3>
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="spotify" href={siteMetadata.github} />
          <SocialIcon kind="applePodcasts" href={siteMetadata.github} />
          <SocialIcon kind="castro" href={siteMetadata.github} />
          <SocialIcon kind="overcast" href={siteMetadata.github} />
        </div>
      </div>
    </>
  )
}
