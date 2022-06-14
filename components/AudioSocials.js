import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

export default function AudioSocials({
  applePodcastLink = 'https://podcasts.apple.com/ca/podcast/on-your-mental/',
  spotifyLink = 'https://open.spotify.com/show/5aJjICGnbefw0hxx8qW0hm',
  youtubeLink = 'https://www.youtube.com/channel/UCYZNw4kprBNpxBrTcnNl_Kw',
}) {
  return (
    <>
      <div className="mt-5 mb-5 flex flex-col items-center">
        <div className="mb-3 flex gap-3 space-x-4">
          <SocialIcon kind="spotify" href={spotifyLink} hoverColor="text-green-600" />
          <SocialIcon kind="applePodcasts" href={applePodcastLink} />
          <SocialIcon kind="youtube" href={youtubeLink} />
        </div>
      </div>
    </>
  )
}
