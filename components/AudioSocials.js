import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

export default function AudioSocials(
  applePodcastLink = 'https://podcasts.apple.com/ca/podcast/on-your-mental/',
  spotifyLink = 'https://open.spotify.com/show/5aJjICGnbefw0hxx8qW0hm',
  youtubeLink = 'https://www.youtube.com/channel/UCYZNw4kprBNpxBrTcnNl_Kw'
) {
  return (
    <>
      <div className="mt-5 mb-5 flex flex-col items-center">
        <div className="mb-3 flex gap-3 space-x-4">
          <SocialIcon kind="spotify" href="https://open.spotify.com/show/5aJjICGnbefw0hxx8qW0hm" />
          <SocialIcon
            kind="applePodcasts"
            href="https://podcasts.apple.com/ca/podcast/on-your-mental/id1551290550"
          />
          <SocialIcon
            kind="youtube"
            href="https://castro.fm/podcast/cc3877aa-6880-49a8-9647-f72c8eb477ce"
          />
        </div>
      </div>
    </>
  )
}
