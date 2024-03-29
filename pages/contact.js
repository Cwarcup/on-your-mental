import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import { BsInstagram, BsEnvelope } from 'react-icons/bs'
import PageTitle from '@/components/PageTitle'

export default function Contact() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="divide-y divide-gray-700">
        <div className="space-y-2 pt-6 pb-1 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contact
          </h1>
        </div>

        <div className="flex h-screen flex-col items-center ">
          <p className="prose m-4 max-w-none pb-4 text-left text-lg leading-7 text-gray-700">
            If there’s a topic you want to see covered, or a question answered directly or in a
            video, we want to hear from you! Send us an email, or DM us on Instagram, and we’ll get
            back to you!
          </p>

          <div>
            <div className="grid auto-rows-fr grid-cols-2 gap-5">
              <a
                className="flex transform flex-col transition duration-500 hover:scale-105"
                href={`mailto:${siteMetadata.email}`}
              >
                <BsEnvelope size="80" className="text-gray-700 hover:text-primary-400" />
              </a>
              <a
                className="flex transform flex-col transition duration-500 hover:scale-105"
                href={siteMetadata.instagram}
              >
                <BsInstagram size="80" className=" text-gray-700 hover:text-instagramColor" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
