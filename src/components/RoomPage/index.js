import styled from "emotion/react"
import get from "lodash/get"
import PropTypes from "prop-types"
import React from "react"

import BackgroundVideo from "../../components/BackgroundVideo/"
import ConnectError from "../../components/ConnectError/"
import DashboardFooter from "../../components/DashboardFooter/"
import DashboardHeader from "../../components/DashboardHeader/"
import RoomState from "../../components/RoomState/"

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  flex: 1;
  color: #FFF;
  text-shadow: 0.05vw 0.05vw 0.1vw rgba(0,0,0,0.8);
  text-shadow: 0.05vmax 0.05vmax 0.1vmax rgba(0,0,0,0.8);

  background: no-repeat center center fixed;
  background-color: rgba(0,0,0,0.75);
  transition: background-image 1000ms ease-in 500ms;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow: hidden;
`

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
  dashboardClock: PropTypes.string,
  roomId: PropTypes.string,
  timezone: PropTypes.string,
}

const RoomPage = props => {
  const {
    dashboardClock,
    backgroundImageUrl,
    backgroundVideoUrl,
    connectError,
    currentMeeting,
    currentTime,
    inSkype,
    name,
    nextMeeting,
    roomId,
    timezone,
  } = props

  if (connectError) {
    return (
      <Container>
        <DashboardHeader name={name} />
        <ConnectError />
        <DashboardFooter
          dashboardClock={dashboardClock}
          name="hello"
          currentTime={currentTime}
          url={get(currentMeeting, "meetingUrl")}
        />
      </Container>
    )
  }

  return (
    <Container>
      <DashboardHeader name={name} />
      <BackgroundVideo
        imageUrl={backgroundImageUrl}
        videourl={backgroundVideoUrl}
      />
      <RoomState
        timezone={timezone}
        roomId={roomId}
        currentMeeting={currentMeeting}
        nextMeeting={nextMeeting}
        inSkype={inSkype}
      />
      <DashboardFooter
        dashboardClock={dashboardClock}
        currentTime={currentTime}
        url={get(currentMeeting, "meetingUrl")}
      />
    </Container>
  )
}

RoomPage.propTypes = propTypes

export default RoomPage
