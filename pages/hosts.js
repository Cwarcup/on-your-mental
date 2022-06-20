import { MDXLayoutRenderer } from '@/components/MDXComponents'
import { getFileBySlug } from '@/lib/mdx'

const DEFAULT_LAYOUT = 'AuthorLayout'
const GUEST_LAYOUT = 'GuestLayout'

export async function getStaticProps() {
  const reuben = await getFileBySlug('authors', ['default'])
  const kabir = await getFileBySlug('authors', ['kabir'])
  const jeffYu = await getFileBySlug('guests', ['jeff-yu'])
  return { props: { reuben, kabir, jeffYu } }
}

export default function About({ reuben, kabir, jeffYu }) {
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
        <MDXLayoutRenderer
          layout={GUEST_LAYOUT}
          mdxSource={jeffYu.mdxSource}
          frontMatter={jeffYu.frontMatter}
        />
        <MDXLayoutRenderer
          layout={GUEST_LAYOUT}
          mdxSource={jeffYu.mdxSource}
          frontMatter={jeffYu.frontMatter}
        />
      </div>
    </>
  )
}
