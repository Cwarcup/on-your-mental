import React, { useEffect, useState } from 'react'
import axios from 'axios'

// const VideoDetail = () => {
//   const requestOptions = {
//     method: 'GET',
//     redirect: 'follow',
//   }

//   const videos = fetch(
//     'https://www.googleapis.com/youtube/v3/search?channelId=UCYZNw4kprBNpxBrTcnNl_Kw&part=snippet&order=date&part=snippet&key=AIzaSyAZrepPyCkcm2BXKqPK-4shzVUEA7Fd1uM\n',
//     requestOptions
//   )
//     .then((response) => response.text())
//     .then((result) => console.log(result))
//     .catch((error) => console.log('error', error))

//   return (
//     <div>
//       <h1>Video Detail</h1>
//       <p></p>
//     </div>
//   )
// }

// export default VideoDetail

// export default class VideoDetails extends React.Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       videos: [],
//     }
//   }

//   componentDidMount() {
//     const requestOptions = {
//       method: 'GET',
//       redirect: 'follow',
//     }

//     fetch(
//       'https://www.googleapis.com/youtube/v3/search?channelId=UCYZNw4kprBNpxBrTcnNl_Kw&part=snippet&order=date&part=snippet&key=AIzaSyDB98XgVDS8xWuVQ0hojMSaII0Cxj1mw8E\n',
//       requestOptions
//     )
//       .then((res) => res.json())
//       .then((result) => {
//         this.setState({ videos: result })
//       })
//       .catch((error) => console.log('error', error))
//   }

//   render() {
//     const { videos } = this.state
//     console.log(videos)

//     return (
//       <div>
//         <h1>Video Detail</h1>
//       </div>
//     )
//   }
// }

function VideoDetail() {
  const [error, setError] = useState(null)
  const [isLoaded, setIsLoaded] = useState(false)
  const [items, setItems] = useState(null)

  var config = {
    method: 'get',
    url: 'https://www.googleapis.com/youtube/v3/search?channelId=UCYZNw4kprBNpxBrTcnNl_Kw&part=snippet&order=date&maxResults=2&key=AIzaSyA-V6h8zGB1thGF22zOVzPLrj-EsEn4X4I',
    headers: {},
  }

  useEffect(() => {
    axios(config)
      .then((response) => response.data)
      .then((data) => setItems(data))
      .catch(function (error) {
        console.log(error)
      })
  }, [])

  console.log(items.items[0].snippet.title)
  console.log(typeof items)

  return (
    <div>
      <h1>Video Detail</h1>
    </div>
  )
}

export default VideoDetail
