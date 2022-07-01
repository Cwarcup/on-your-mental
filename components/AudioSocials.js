import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

export default function AudioSocials({
  applePodcastLink = 'https://podcasts.apple.com/ca/podcast/on-your-mental/id1551290550',
  spotifyLink = 'https://open.spotify.com/show/5aJjICGnbefw0hxx8qW0hm',
  youtubeLink = 'https://www.youtube.com/channel/UCYZNw4kprBNpxBrTcnNl_Kw',
  green = 'dark:hover:text-spotifyGreen',
  purple = 'dark:hover:text-applePodcastsPurple',
  red = 'dark:hover:text-youtubeRed',
}) {
  return (
    <>
      <div className="flex flex-col items-center py-5">
        <div className="flex gap-3 space-x-4">
          <SocialIcon kind="spotify" href={spotifyLink} hoverColor={green} />
          <SocialIcon kind="applePodcasts" href={applePodcastLink} hoverColor={purple} />
          <SocialIcon kind="youtube" href={youtubeLink} hoverColor={red} />
        </div>
      </div>
    </>
  )
}
