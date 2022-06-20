import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'
import GuestLayout from '@/layouts/GuestLayout'

const DEFAULT_LAYOUT = 'AuthorLayout'

export async function getStaticProps() {
  const reuben = await getFileBySlug('authors', ['default'])
  const kabir = await getFileBySlug('authors', ['kabir'])

  return { props: { reuben, kabir } }
}

export default function About({ reuben, kabir }) {
  return (
    <>
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            About The Hosts
          </h1>
        </div>
        <MDXLayoutRenderer
          layout={reuben.frontMatter.layout || DEFAULT_LAYOUT}
          mdxSource={reuben.mdxSource}
          frontMatter={reuben.frontMatter}
        />
        <MDXLayoutRenderer
          layout={kabir.frontMatter.layout || DEFAULT_LAYOUT}
          mdxSource={kabir.mdxSource}
          frontMatter={kabir.frontMatter}
        />
      </div>
      <div className="divide-y">
        <div className="space-y-2 pt-6 pb-8 md:space-y-5">
          <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 dark:text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
            Guests
          </h1>
        </div>
      </div>
      <div className="flex flex-wrap justify-around">
        <GuestLayout
          name="Curtis Warcup"
          avatarFileName="curtis.jpg"
          occupation="Developer"
          instagram={'https://www.instagram.com/curtis.warcup/'}
        />
        <GuestLayout
          name="Devin Flemming"
          avatarFileName="devinF.jpg"
          instagram={'https://www.instagram.com/_dandydev_/'}
        />
        <GuestLayout
          name="Jeff Yu"
          avatarFileName="jeffYu.jpeg"
          instagram={'https://www.instagram.com/yuthepoler/'}
        />
      </div>
    </>
  )
}
