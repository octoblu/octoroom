import styled from "emotion/react"
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
  height: 100%;
  width: 100%;
`

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
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
          currentTime={currentTime}
          dashboardClock={dashboardClock}
        />
      </Container>
    )
  }

  return (
    <Wrapper>
      <Container>
        <DashboardHeader name={name} />
        <RoomState
          timezone={timezone}
          roomId={roomId}
          currentMeeting={currentMeeting}
          nextMeeting={nextMeeting}
          inSkype={inSkype}
        />
        <DashboardFooter
          currentTime={currentTime}
          dashboardClock={dashboardClock}
        />
      </Container>

      <BackgroundVideo
        imageUrl={backgroundImageUrl}
        videourl={backgroundVideoUrl}
      />
    </Wrapper>
  )
}

RoomPage.propTypes = propTypes

export default RoomPage
