# On Your Mental Blog

Website can be found [here](https://on-your-mental.vercel.app/).

Forked from the incredible [Tailwind-Nextjs-Starter-Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) by [Tim Lrx](https://github.com/timlrx).

Check out the starter documentation or fork this project and start building your own blog!

# Examples

![Homepage](https://media1.giphy.com/media/WwSz4HMCsMNr5fztkl/giphy.gif?cid=790b761154c2b76c355b64fee4049e571e603a50eb9736f4&rid=giphy.gif&ct=g)

![Watch Listen Example](https://media2.giphy.com/media/GDcl1GaVOwCr6HSylm/giphy.gif?cid=790b761138b639134d272fb72eb45706cc704c9a51021997&rid=giphy.gif&ct=g)

# Motivation

I was inspired by the [Tailwind-Nextjs-Starter-Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) and decided to fork it to build my own blog. While working on my own personal blog, I remembered my good friend, [Reuben Hardern](https://www.instagram.com/reubenhardern/?hl=en) was starting his own podcast. I offered to build him a small website to get his podcast started.

As a 8-month, self-taught developer, I thought this would be a great introduction to Next.js and Tailwind.

I took inspiration from the other blogs linked in the README.md of the [Tailwind-Nextjs-Starter-Blog](https://github.com/timlrx/tailwind-nextjs-starter-blog) to help me with design principles and styling.

# Features

## Youtube Integration

`YoutubeEmbed` components is a simple way of embedding a YouTube video into a page. It accepts a YouTube video ID and renders the video.

`YoutubeDescription` component returns the description of a YouTube video in a `<p>` tag. The google API returns a string containing multiple `\n` characters, which renders in a strange way. This component splits on the `\n` characters and maps over each item, returning the item in a `<p>` tag.

`latestVideo` component returns the latest video from the channel. It uses the `getDescription` function to get the relevant text from the YouTube video description.

`YTVideoIdDetails` function gets specific details for a given YouTube video ID. This information is not available in the general list search API.

## Buzzsprout RSS Integration

Buzzsprout is a podcasting website. It has a RSS feed for each of its channels. This is where I used the RSS feed to get the latest episode from each channel and display a playable component for each episode.

I used [React Audio Player](https://www.npmjs.com/package/react-audio-player) to display the audio player.

Customization of this component can be found in the `EpisodeList` component.

## Stylist Changes

- Created sticky navbar, becomes transparent when scrolling down.
- Social media and audio platform icons change to their brand colors when hovered.
- Homepage posts are displayed in a grid. Each card contains a thumbnail, title, description, tags, and a link to the post.

# Development

Run `npm start` to start the development server. Navigate to the [localhost:3000](http://localhost:3000) URL to view the site.

# Compose a Post

Run `node ./scripts/compose.js` to bootstrap a new post.
