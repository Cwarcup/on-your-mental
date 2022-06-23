import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import he from 'he'
import Image from '@/components/Image'
import { BsInstagram } from 'react-icons/bs'
import { HiOutlineMail } from 'react-icons/hi'

export default function Contact() {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />

      <div className="flex flex-col items-center px-4">
        <div className="space-y-2 pb-4 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Contact
          </h1>
        </div>
        <h3 className="sm:pb-30  max-w-md pb-20 text-center">
          If there's topics you want to see discussed, DM on Instagram or TikTok, or send an email.
        </h3>
        <div>
          <div className="grid auto-rows-fr grid-cols-1 items-center gap-5 pb-24 sm:pb-80 md:grid-cols-2">
            <a
              className="flex transform flex-col items-center transition duration-500 hover:scale-105"
              href={`mailto:${siteMetadata.email}`}
            >
              <HiOutlineMail size="50" className="text-gray-100 hover:text-primary-400" />
              <p className="p-1 font-semibold text-gray-100 ">Send an email</p>
            </a>
            <a
              className="flex transform flex-col items-center transition duration-500 hover:scale-105"
              href={siteMetadata.instagram}
            >
              <BsInstagram size="50" className=" text-gray-100 hover:text-instagramColor" />
              <p className="p-1 font-semibold text-gray-100">DM us on Instagram</p>
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
