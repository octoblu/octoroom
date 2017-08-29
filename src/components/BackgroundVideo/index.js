import { css } from "emotion"
import styled from "emotion/react"
import isEmpty from "lodash/isEmpty"
import PropTypes from "prop-types"
import React from "react"

const Container = styled("div")`
  bottom: 0;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`

const media = css`
  min-width: 100%;
  min-height: 100%;

  width: auto;
  height: auto;

  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%,-50%);
`

const Image = styled("img")`
  composes: ${media};
`

const Video = styled("video")`
  composes: ${media};
`

const propTypes = {
  imageUrl: PropTypes.string.isRequired,
  videoUrl: PropTypes.string,
}

const BackgroundVideo = ({ imageUrl, videoUrl }) => {
  if (isEmpty(videoUrl)) {
    return (
      <Container>
        <Image src={imageUrl} />
      </Container>
    )
  }

  return (
    <Container key={videoUrl}>
      <Video poster={imageUrl} autoPlay loop muted>
        <source src={videoUrl} type="video/mp4" />
      </Video>
    </Container>
  )
}

BackgroundVideo.propTypes = propTypes

export default BackgroundVideo
