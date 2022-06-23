import SocialIcon from '@/components/social-icons'
import Image from '@/components/Image'
import { PageSEO } from '@/components/SEO'

export default function AuthorLayout({ children, frontMatter }) {
  const { name, avatar, occupation, company, email, instagram, youtube, github, tiktok } =
    frontMatter

  const instagramColor = 'dark:hover:text-instagramColor'

  return (
    <>
      <PageSEO title={`About - ${name}`} description={`About me - ${name}`} />
      <div className="divide-y">
        <div className="items-start space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0">
          <div className="flex flex-col items-center pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="h-48 w-48 rounded-full"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight">{name}</h3>
            <div className="text-gray-500 dark:text-gray-400">{occupation}</div>
            <div className="text-gray-500 dark:text-gray-400">{company}</div>
            <div className="flex space-x-3 pt-4">
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
          <div className="prose max-w-none py-4 dark:prose-dark xl:col-span-2">{children}</div>
        </div>
      </div>
    </>
  )
}
