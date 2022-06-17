import { PageSEO } from '@/components/SEO'
import siteMetadata from '@/data/siteMetadata'
import EpisodeList from '@/components/EpisodeList'
import AudioSocials from '@/components/AudioSocials'

export default function Tags({ tags }) {
  return (
    <>
      <PageSEO title={siteMetadata.title} description={siteMetadata.description} />
      <div className="space-y-2 pt-6 pb-1 md:space-y-5">
        <h2 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-100 sm:text-4xl sm:leading-10 md:text-6xl md:leading-14">
          Listen
        </h2>
        <AudioSocials />
      </div>
      <EpisodeList />
    </>
  )
}
