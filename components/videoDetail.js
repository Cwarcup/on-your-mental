import React from 'react'

const VideoDetail = ({ video }) => {
  if (!video) {
    return (
      <div className="ui embed">
        <div className="ui segment">
          <div className="ui active inverted dimmer">
            <div className="ui text loader">Loading</div>
          </div>
        </div>
      </div>
    )
  }
  const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`
  return (
    <div>
      <div className="ui embed">
        <iframe src={videoSrc} title="Video Player"></iframe>
      </div>
      <div className="ui segment">
        <h4 className="ui header">{video.snippet.title}</h4>
        <p className="description">{video.snippet.description}</p>
      </div>
    </div>
  )
}

export default VideoDetail
