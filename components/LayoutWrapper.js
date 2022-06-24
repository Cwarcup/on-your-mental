import siteMetadata from '@/data/siteMetadata'
import headerNavLinks from '@/data/headerNavLinks'
import Logo from '@/data/logoWhite.svg'
import Link from './Link'
import SectionContainer from './SectionContainer'
import Footer from './Footer'
import MobileNav from './MobileNav'
import { Menu, Transition } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/solid'
import { Fragment, useEffect, useRef, useState } from 'react'
import SocialIcon from '@/components/social-icons'

const LayoutWrapper = ({ children }) => {
  const [stuck, setStuck] = useState(false)
  const ref = useRef()

  const stuckClasses =
    'py-2 sticky top-n-1 z-50 transition-all backdrop isSticky mx-auto border-b border-slate-900/10 dark:border-slate-300/10 mb-5 w-full'
  const unstuckClasses =
    'py-2 md:py-8 sticky top-n-1 z-50 transition-all backdrop mx-auto border-b border-b-0 border-slate-900/10 dark:border-slate-300/10 mb-5 w-full'

  const classes = stuck ? stuckClasses : unstuckClasses

  useEffect(() => {
    const cachedRef = ref.current
    const observer = new IntersectionObserver(
      ([e]) => {
        setStuck(e.intersectionRatio < 1)
      },
      { threshold: [1.0] }
    )
    observer.observe(cachedRef)
    return () => observer.unobserve(cachedRef)
  }, [ref])

  return (
    <>
      <header className={classes} ref={ref}>
        <div className="mx-auto  flex max-w-3xl items-center justify-between px-4 sm:px-6 xl:max-w-5xl xl:px-0">
          <div>
            <Link href="/" aria-label="On Your Mental">
              <div className=" flex items-center justify-between">
                <div className="mr-3">
                  <Logo />
                </div>
              </div>
            </Link>
          </div>
          <div className="flex items-center text-base leading-5">
            <div className="hidden sm:block">
              {headerNavLinks.map((link) => {
                if (link.type !== 'dropdown') {
                  return (
                    <Link
                      key={link.title}
                      href={link.href}
                      className="p-1 font-bold text-gray-100 hover:text-primary-400 sm:p-4"
                    >
                      {link.title}
                    </Link>
                  )
                }
                if (link.type === 'dropdown') {
                  return (
                    <Menu as="a" key={link.type} className="relative inline-block p-1 sm:p-4">
                      <div>
                        <Menu.Button className="inline-flex justify-center rounded-md bg-transparent font-bold text-gray-100 hover:text-primary-400 ">
                          Socials
                          <ChevronDownIcon
                            className="ml-1 -mr-1 h-5 w-5 text-gray-100 hover:text-primary-400"
                            aria-hidden="true"
                          />
                        </Menu.Button>
                      </div>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items
                          className="absolute right-0 mt-2 w-36 origin-top-right rounded-md bg-gray-100  shadow-lg"
                          key={link.title}
                        >
                          <Link href={link.links[0].href}>
                            <div className="px-1 py-1">
                              <Menu.Item key={link.links[0].title}>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active ? ' text-primary-400' : 'text-gray-700'
                                    } group flex w-full items-center  rounded-md px-2 py-2 text-sm font-bold`}
                                  >
                                    <div className="px-2">
                                      <SocialIcon
                                        kind={link.links[0].kind}
                                        href={link.links[0].href}
                                        size="5"
                                        hoverColor="text-youtubeRed"
                                        color="text-youtubeRed"
                                      />
                                    </div>
                                    {link.links[0].title}
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </Link>
                          <Link href={link.links[1].href}>
                            <div className="px-1 py-1">
                              <Menu.Item key={link.links[1].title}>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active ? ' text-primary-400' : 'text-gray-700'
                                    } group flex w-full items-center  rounded-md px-2 py-2 text-sm font-bold`}
                                  >
                                    <div className="px-2">
                                      <SocialIcon
                                        kind={link.links[1].kind}
                                        href={link.links[1].href}
                                        size="5"
                                        hoverColor="text-instagramColor"
                                        color="text-instagramColor"
                                      />
                                    </div>
                                    {link.links[1].title}
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </Link>
                          <Link href={link.links[2].href}>
                            <div className="px-1 py-1">
                              <Menu.Item key={link.links[2].title}>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active ? ' text-primary-400' : 'text-gray-700'
                                    } group flex w-full items-center  rounded-md px-2 py-2 text-sm font-bold`}
                                  >
                                    <div className="px-2">
                                      <SocialIcon
                                        kind={link.links[2].kind}
                                        href={link.links[2].href}
                                        size="5"
                                        hoverColor="text-tiktokColor"
                                        color="text-tiktokColor"
                                      />
                                    </div>
                                    {link.links[2].title}
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </Link>
                          <Link href={link.links[3].href}>
                            <div className="px-1 py-1">
                              <Menu.Item key={link.links[3].title}>
                                {({ active }) => (
                                  <button
                                    className={`${
                                      active ? ' text-primary-400' : 'text-gray-700'
                                    } group flex w-full items-center  rounded-md px-2 py-2 text-sm font-bold`}
                                  >
                                    <div className="px-2">
                                      <SocialIcon
                                        kind={link.links[3].kind}
                                        href={link.links[3].href}
                                        size="5"
                                        hoverColor="text-applePodcastsPurple"
                                        color="text-applePodcastsPurple"
                                      />
                                    </div>
                                    {link.links[3].title}
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </Link>
                          <Link href={link.links[4].href}>
                            <div className="px-1 py-1">
                              <Menu.Item key={link.links[4].title}>
                                {({ active }) => (
                                  <button
                                    href={link.links[4].href}
                                    className={`${
                                      active ? ' text-primary-400' : 'text-gray-700'
                                    } group flex w-full items-center  rounded-md px-2 py-2 text-sm font-bold`}
                                  >
                                    <div className="px-2">
                                      <SocialIcon
                                        kind={link.links[4].kind}
                                        href={link.links[4].href}
                                        size="5"
                                        hoverColor="text-spotifyGreen"
                                        color="text-spotifyGreen"
                                      />
                                    </div>
                                    {link.links[4].title}
                                  </button>
                                )}
                              </Menu.Item>
                            </div>
                          </Link>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  )
                }
              })}
            </div>
            <MobileNav />
          </div>
        </div>
      </header>
      <SectionContainer>
        <main className="mb-auto">{children}</main>
        <Footer />
      </SectionContainer>
    </>
  )
}

export default LayoutWrapper
