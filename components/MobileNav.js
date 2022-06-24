import { useState, useEffect } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import { ChevronRightIcon } from '@heroicons/react/solid'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'
import { motion } from 'framer-motion'
import { FaTiktok, FaInstagram, FaPodcast, FaSpotify } from 'react-icons/fa'

const MobileNav = () => {
  const [navShow, setNavShow] = useState(false)

  const onToggleNav = () => {
    setNavShow((status) => {
      if (status) {
        document.body.style.overflow = 'auto'
      } else {
        // Prevent scrolling
        document.body.style.overflow = 'hidden'
      }
      return !status
    })
  }

  return (
    <div className="sm:hidden">
      <button
        type="button"
        className="ml-1 mr-1 h-8 w-8 rounded py-1"
        aria-label="Toggle Menu"
        onClick={onToggleNav}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-100"
        >
          {navShow ? (
            <path
              fillRule="evenodd"
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          ) : (
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          )}
        </svg>
      </button>
      <div
        className={`fixed top-24 right-0 z-10 mt-2 h-[96rem] w-full transform bg-gray-800 opacity-95 duration-300 ease-in-out ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed h-[16rem] w-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav
          className="bg-body dark:bg-body-dark visible fixed left-0 right-0 top-[60px] bottom-0 z-50 block h-full w-full max-w-[100vw] overflow-hidden overflow-y-scroll px-6 pb-6 sm:hidden"
          animate={{ x: 0 }}
          initial={{ x: '100vw' }}
          transition={{
            type: 'spring',
            stiffness: 300,
            damping: 30,
          }}
        >
          <div className="divide-border-primary dark:divide-border-primary-dark flex flex-row divide-x py-4 px-2">
            <div className="w-full text-center">
              <a
                href={siteMetadata.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <FaTiktok size={20} className="mr-1" />
              </a>
            </div>
            <div className="w-full text-center">
              <a
                href={siteMetadata.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <FaInstagram size={20} className="mr-1" />
              </a>
            </div>
            <div className="w-full text-center">
              <a
                href={siteMetadata.applePodcastLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <FaPodcast size={20} className="mr-1" />
              </a>
            </div>
            <div className="w-full text-center">
              <a
                href={siteMetadata.spotifyLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <FaSpotify size={20} className="mr-1" />
              </a>
            </div>
          </div>
          {headerNavLinks.map((link, index) => {
            if (link.type !== 'dropdown') {
              return (
                <div key={link.title} className="dark:border-border-primary-dark border-b py-4">
                  <Link
                    href={link.href}
                    className="block rounded-lg py-4 px-2 text-base font-bold tracking-widest"
                    onClick={onToggleNav}
                  >
                    {link.title}
                  </Link>
                </div>
              )
            }
          })}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
