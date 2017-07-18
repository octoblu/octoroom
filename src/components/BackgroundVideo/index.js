import isEmpty from "lodash/isEmpty"
import React, { PropTypes } from "react"

import styles from "./styles.css"

const propTypes = {
  imageUrl: PropTypes.string.isRequired,
  videoUrl: PropTypes.string,
}

const BackgroundVideo = ({ imageUrl, videoUrl }) => {
  if (isEmpty(videoUrl)) {
    return (
      <div className={styles.wrapper}>
        <img src={imageUrl} className={styles.image} />
      </div>
    )
  }

  return (
    <div key={videoUrl} className={styles.wrapper}>
      <video className={styles.video} poster={imageUrl} autoPlay loop muted>
        <source src={videoUrl} type="video/mp4" />
      </video>
    </div>
  )
}

BackgroundVideo.propTypes = propTypes

export default BackgroundVideo
