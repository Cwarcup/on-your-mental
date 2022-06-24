import Mail from './mail.svg'
import Youtube from './youtube.svg'
import Instagram from './instagram.svg'
import Tiktok from './tiktok.svg'
import Applepodcasts from './applepodcasts.svg'
import Spotify from './spotify.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  youtube: Youtube,
  instagram: Instagram,
  tiktok: Tiktok,
  applePodcasts: Applepodcasts,
  spotify: Spotify,
}

const SocialIcon = ({ kind, href, size = 8, hoverColor, color = 'text-gray-200' }) => {
  if (!href || (kind === 'mail' && !/^mailto:\w+([.-]?\w+)@\w+([.-]?\w+)(.\w{2,3})+$/.test(href)))
    return null

  const SocialSvg = components[kind]

  return (
    <a
      className="group transform text-sm text-gray-500  hover:text-gray-600"
      target="_blank"
      rel="noopener noreferrer"
      href={href}
    >
      <span className="sr-only">{kind}</span>
      <SocialSvg
        className={`transform fill-current transition duration-500 group-hover:scale-105 dark:${color} ${hoverColor} h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
