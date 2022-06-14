import Link from '@/components/Link'
import { PageSEO } from '@/components/SEO'
import Tag from '@/components/Tag'
import siteMetadata from '@/data/siteMetadata'
import { getAllFilesFrontMatter } from '@/lib/mdx'
import formatDate from '@/lib/utils/formatDate'
import Image from '@/components/Image'
import Hero from '@/components/Hero'

import NewsletterForm from '@/components/NewsletterForm'
import Footer from '@/components/Footer'

const MAX_DISPLAY = 5

export async function getStaticProps() {
  const posts = await getAllFilesFrontMatter('blog')

  return { props: { posts } }
}

export default function Home({ posts }) {
  // const someStyle = {
  //   box-sizing: "border-box",
  //   display: "block",
  //   overflow: "hidden",
  //   width: "initial",
  //   height: "initial",
  //   background: "none",
  //   opacity: "1",
  //   border: "0",
  //   margin: "0",
  //   padding: "0",
  //   position: "absolute",
  //   top: "0",
  //   left: "0",
  //   bottom: "0",
  //   right: "0"
  // };
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <Hero />
      <div className="container mx-auto">
        <div className="my-4 flex flex-col">
          <span className="font-poppins title-font text-3xl font-bold">Recent Posts</span>
        </div>
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
          {!posts.length && 'No posts found.'}
          {posts.slice(0, MAX_DISPLAY).map((frontMatter) => {
            const { slug, date, title, summary, tags, images } = frontMatter
            return (
              <div
                key={slug}
                className="group bg-day dark:bg-night w-full bg-opacity-50 dark:bg-opacity-50"
              >
                <a className="c-card block transform overflow-hidden rounded-lg bg-transparent transition duration-500 group-hover:scale-105">
                  <div className="relative max-h-4 overflow-hidden rounded-lg pb-60">
                    <span>
                      <img
                        alt={title}
                        src={images[0]}
                        className="absolute inset-0 h-full w-full  object-cover "
                      />
                    </span>
                  </div>
                  <div className="py-4">
                    <span className="inline-flex w-full items-center justify-between">
                      <span className="inline-block rounded border border-gray-700 py-1 px-2 text-xs font-medium">
                        {tags.map((tag) => (
                          <Tag key={tag} text={tag} />
                        ))}
                      </span>
                      <time dateTime={date}>{formatDate(date)}</time>
                    </span>
                    <h2 className="mt-2 mb-2 font-bold md:text-xl">
                      <Link href={`/blog/${slug}`} className="text-gray-900 dark:text-gray-100">
                        {title}
                      </Link>
                    </h2>
                    <p className="text-sm tracking-wider text-gray-600 dark:text-gray-300">
                      {summary}
                    </p>
                  </div>
                </a>
              </div>
            )
          })}
        </div>

        {posts.length > MAX_DISPLAY && (
          <div className="flex justify-end text-base font-medium leading-6">
            <Link
              href="/posts"
              className="text-primary-500 hover:text-primary-600 dark:hover:text-primary-400"
              aria-label="all posts"
            >
              All Posts &rarr;
            </Link>
          </div>
        )}
      </div>
    </>
  )
}
