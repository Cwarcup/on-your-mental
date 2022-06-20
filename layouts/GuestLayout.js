import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function SimpleGuestLayout({
  name,
  avatarFileName,
  youtube = null,
  tiktok = null,
  instagram = null,
  github = null,
  occupation = null,
  company = null,
  email = null,
}) {
  const instagramColor = 'dark:hover:text-instagramColor'

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="flex flex-col items-center pt-4">
        <Image
          src={`/static/images/guest-avatars/${avatarFileName}`}
          alt="avatar"
          width="170px"
          height="170px"
          className="h-48 w-48 rounded-full"
        />
        <h3 className="pt-2 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
        <div className="flex space-x-3 pt-2">
          <SocialIcon
            kind="mail"
            href={`mailto:${email}`}
            hoverColor="dark:hover:text-primary-700"
          />
          <SocialIcon kind="youtube" href={youtube} hoverColor="dark:hover:text-youtubeRed" />
          <SocialIcon kind="instagram" href={instagram} hoverColor={instagramColor} />
          <SocialIcon kind="tiktok" href={tiktok} hoverColor="dark:hover:text-tiktokColor" />
        </div>
      </div>
    </>
  )
}
