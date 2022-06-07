import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

export default function AudioSocials(applePodcastLink, spotifyLink, overcastLink, castroLink) {
  return (
    <>
      <div className="mt-10 mb-10 flex flex-col items-center">
        <h3> Audio versions available below!</h3>
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="spotify" href="https://open.spotify.com/show/5aJjICGnbefw0hxx8qW0hm" />
          <SocialIcon
            kind="applePodcasts"
            href="https://podcasts.apple.com/ca/podcast/on-your-mental/"
          />
          <SocialIcon kind="castro" href="https://castro.fm/itunes15/on-your-mental" />
          <SocialIcon kind="overcast" href="https://overcast.fm/itunes15/on-your-mental" />
        </div>
      </div>
    </>
  )
}
