import get from "lodash/get"
import React, { PropTypes } from "react"

import BackgroundVideo from "../../components/BackgroundVideo/"
import ConnectError from "../../components/ConnectError/"
import DashboardFooter from "../../components/DashboardFooter/"
import DashboardHeader from "../../components/DashboardHeader/"
import RoomState from "../../components/RoomState/"

import styles from "./styles.css"

const propTypes = {
  backgroundImageUrl: PropTypes.string,
  backgroundVideoUrl: PropTypes.string,
  connectError: PropTypes.object,
  currentMeeting: PropTypes.object,
  currentTime: PropTypes.string,
  nextMeeting: PropTypes.object,
  name: PropTypes.string,
  loading: PropTypes.bool,
  roomId: PropTypes.string,
}

const defaultProps = {}
const RoomPage = props => {
  const {
    backgroundImageUrl,
    backgroundVideoUrl,
    connectError,
    currentMeeting,
    currentTime,
    nextMeeting,
    name,
    roomId,
    loading,
  } = props

  if (connectError) {
    return (
      <div className={styles.root}>
        <DashboardHeader name={name} />
        <ConnectError />
        <DashboardFooter
          currentTime={currentTime}
          url={get(currentMeeting, "meetingUrl")}
          loading={loading}
        />
      </div>
    )
  }

  return (
    <div className={styles.root}>
      <DashboardHeader name={name} />
      <BackgroundVideo
        imageUrl={backgroundImageUrl}
        videourl={backgroundVideoUrl}
      />
      <RoomState
        roomId={roomId}
        currentMeeting={currentMeeting}
        nextMeeting={nextMeeting}
      />
      <DashboardFooter
        currentTime={currentTime}
        url={get(currentMeeting, "meetingUrl")}
        loading={loading}
      />
    </div>
  )
}

RoomPage.propTypes = propTypes
RoomPage.defaultProps = defaultProps

export default RoomPage
