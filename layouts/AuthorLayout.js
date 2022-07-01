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
      <div className="divide-y divide-gray-700">
        <div className="items-center space-y-2 xl:grid xl:grid-cols-3 xl:gap-x-8 xl:space-y-0 xl:py-2">
          <div className="mt-2 flex flex-col items-center  pt-8">
            <Image
              src={avatar}
              alt="avatar"
              width="192px"
              height="192px"
              className="border-card h-48 w-48 rounded-full shadow-lg"
            />
            <h3 className="pt-4 pb-2 text-2xl font-bold leading-8 tracking-tight text-gray-900">
              {name}
            </h3>
            <div className="text-gray-900">{occupation}</div>
            <div className="text-gray-900">{company}</div>
            <div className="mb-2 flex space-x-3">
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
          <div className="prose max-w-none rounded bg-ORMblue px-4 py-2 shadow-lg dark:prose-dark xl:col-span-2">
            {children}
          </div>
        </div>
      </div>
    </>
  )
}
