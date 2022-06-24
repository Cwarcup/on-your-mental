import { useState } from 'react'
import Link from './Link'
import headerNavLinks from '@/data/headerNavLinks'
import { ChevronRightIcon } from '@heroicons/react/solid'
import SocialIcon from '@/components/social-icons'
import siteMetadata from '@/data/siteMetadata'

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
        className={`fixed top-24 right-0 z-10 -mt-3 h-[96rem] w-full transform bg-gray-800 opacity-95 duration-300 ease-in-out ${
          navShow ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <button
          type="button"
          aria-label="toggle modal"
          className="fixed h-[16rem] w-full cursor-auto focus:outline-none"
          onClick={onToggleNav}
        ></button>
        <nav className="fixed mt-8 flex h-full flex-col">
          {headerNavLinks.map((link, index) => {
            if (link.type !== 'dropdown') {
              return (
                <div key={index} className="flex items-center px-12 py-4">
                  <Link
                    href={link.href}
                    className="mono-type text-2xl font-bold tracking-widest text-gray-100"
                    onClick={onToggleNav}
                  >
                    {link.title}
                  </Link>
                  <Link href={link.href}>
                    <ChevronRightIcon
                      className="ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              )
            }

            return (
              <>
                <footer className="footer text-neutral-content items-center bg-transparent p-4">
                  <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                    <SocialIcon
                      kind="tiktok"
                      href={siteMetadata.tiktok}
                      hoverColor="dark:hover:text-tiktokColor"
                    />
                    <SocialIcon
                      kind="instagram"
                      href={siteMetadata.instagram}
                      hoverColor="dark:hover:text-instagramColor"
                    />
                    <SocialIcon
                      kind="applePodcasts"
                      href={siteMetadata.applePodcastLink}
                      hoverColor="dark:hover:text-applePodcastsPurple"
                    />
                    <SocialIcon
                      kind="spotify"
                      href={siteMetadata.spotifyLink}
                      hoverColor="dark:hover:text-spotifyGreen"
                    />
                  </div>
                </footer>
              </>
            )
          })}
        </nav>
      </div>
    </div>
  )
}

export default MobileNav
