import PageTitle from './PageTitle'
import LatestVideo from './latestVideo'

export default function Hero() {
  return (
    <div className="flex w-full flex-col ">
      <div className="space-y-2 pb-4 md:space-y-5">
        <PageTitle>Welcome to On Your Mental</PageTitle>

        <p className="prose m-4 max-w-none pb-4 text-center text-lg leading-7 text-gray-500 dark:text-gray-400">
          A podcast that shares candid and open conversations between & about men and what's on
          their minds! Ranging from something they're working on, something they're thinking about,
          to relationships or general feelings. All of it's on the table!
        </p>
      </div>
    </div>
  )
}
