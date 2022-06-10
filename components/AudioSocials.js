import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

export default function AudioSocials(applePodcastLink, spotifyLink, overcastLink, castroLink) {
  return (
    <>
      <div className="mt-10 mb-8 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="spotify" href="https://open.spotify.com/show/5aJjICGnbefw0hxx8qW0hm" />
          <SocialIcon
            kind="applePodcasts"
            href="https://podcasts.apple.com/ca/podcast/on-your-mental/id1551290550"
          />
          <SocialIcon
            kind="castro"
            href="https://castro.fm/podcast/cc3877aa-6880-49a8-9647-f72c8eb477ce"
          />
          <SocialIcon kind="overcast" href="https://overcast.fm/itunes1551290550" />
        </div>
      </div>
    </>
  )
}
