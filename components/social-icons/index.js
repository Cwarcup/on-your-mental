import Mail from './mail.svg'
import Github from './github.svg'
import Facebook from './facebook.svg'
import Youtube from './youtube.svg'
import Linkedin from './linkedin.svg'
import Instagram from './instagram.svg'
import Tiktok from './tiktok.svg'
import Applepodcasts from './applepodcasts.svg'
import Spotify from './spotify.svg'
import Castro from './castro.svg'
import Overcast from './overcast.svg'

// Icons taken from: https://simpleicons.org/

const components = {
  mail: Mail,
  github: Github,
  facebook: Facebook,
  youtube: Youtube,
  linkedin: Linkedin,
  instagram: Instagram,
  tiktok: Tiktok,
  applePodcasts: Applepodcasts,
  spotify: Spotify,
  castro: Castro,
  overcast: Overcast,
}

const SocialIcon = ({ kind, href, size = 8, hoverColor }) => {
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
        className={`transform fill-current transition duration-500 group-hover:scale-105 dark:text-gray-200 ${hoverColor} h-${size} w-${size}`}
      />
    </a>
  )
}

export default SocialIcon
