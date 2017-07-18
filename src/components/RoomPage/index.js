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
  inSkype: PropTypes.bool,
  loading: PropTypes.bool,
  name: PropTypes.string,
  nextMeeting: PropTypes.object,
  roomId: PropTypes.string,
}

const RoomPage = props => {
  const {
    backgroundImageUrl,
    backgroundVideoUrl,
    connectError,
    currentMeeting,
    currentTime,
    inSkype,
    loading,
    name,
    nextMeeting,
    roomId,
  } = props

  console.log("ROOMPAGE", inSkype)

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
        inSkype={inSkype}
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

export default RoomPage
