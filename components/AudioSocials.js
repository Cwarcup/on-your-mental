import SocialIcon from '@/components/social-icons'

export default function AudioSocials(applePodcastLink, spotifyLink, overcastLink, castroLink) {
  return (
    <>
      <div className="mt-16 flex flex-col items-center">
        <div className="mb-3 flex space-x-4">
          <SocialIcon kind="applepodcasts" href={applePodcastLink} />
          <SocialIcon kind="spotify" href={spotifyLink} />
          <SocialIcon kind="overcast" href={overcastLink} />
          <SocialIcon kind="castro" href={castroLink} />
        </div>
      </div>
    </>
  )
}
