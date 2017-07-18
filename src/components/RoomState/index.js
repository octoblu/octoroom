import Debug from "debug"
import get from "lodash/get"
import isEmpty from "lodash/isEmpty"
import React from "react"
import PropTypes from "prop-types"

import Available from "../Available"
import Booked from "../Booked"

const debug = Debug("dashboard:components:RoomState")

const propTypes = {
  currentMeeting: PropTypes.object,
  inSkype: PropTypes.bool,
  nextmeeting: PropTypes.object,
  roomid: PropTypes.string,
}

const defaultProps = {
  currentMeeting: null,
  inSkype: false,
  nextMeeting: null,
  roomId: null,
}

const RoomState = ({ currentMeeting, inSkype, nextMeeting, roomId }) => {
  debug("props", { currentMeeting, inSkype, nextMeeting, roomId })

  if (isEmpty(roomId))
    return <Available roomId={roomId} nextMeeting={nextMeeting} />
  if (isEmpty(currentMeeting))
    return <Available roomId={roomId} nextMeeting={nextMeeting} />

  let { meetingUrl } = currentMeeting
  const currentMeetingRoom = get(currentMeeting, `rooms.${roomId}`)
  let { endTime, subject } = currentMeetingRoom

  if (isEmpty(subject)) subject = "Meeting"

  return (
    <Booked
      inSkype={inSkype}
      endTime={endTime}
      meetingUrl={meetingUrl}
      subject={subject}
    />
  )
}

RoomState.propTypes = propTypes
RoomState.defaultProps = defaultProps

export default RoomState
