import _ from "lodash"
import React, { PropTypes } from "react"
import styles from "./styles.css"

const propTypes = {
  imageUrl: PropTypes.string.isRequired,
  videoUrl: PropTypes.string,
}
const defaultProps = {}

const BackgroundVideo = ({ imageUrl, videoUrl }) => {
  // return null
  if (_.isEmpty(videoUrl)) {
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
BackgroundVideo.defaultProps = defaultProps

export default BackgroundVideo
