import get from "lodash/get"
import isEmpty from "lodash/isEmpty"
import React, { PropTypes } from "react"

import Available from "../Available"
import Booked from "../Booked"

const propTypes = {
  currentMeeting: PropTypes.object,
  nextMeeting: PropTypes.object,
  roomId: PropTypes.string,
}

const defaultProps = {
  currentMeeting: null,
  nextMeeting: null,
  roomId: null,
}

const InnerRoomState = ({ roomId, currentMeeting, nextMeeting }) => {
  if (isEmpty(roomId))
    return <Available roomId={roomId} nextMeeting={nextMeeting} />
  if (isEmpty(currentMeeting))
    return <Available roomId={roomId} nextMeeting={nextMeeting} />

  let { meetingUrl } = currentMeeting
  const currentMeetingRoom = get(currentMeeting, `rooms.${roomId}`)
  let { endTime, subject } = currentMeetingRoom
  if (isEmpty(subject)) subject = "Meeting"

  return <Booked endTime={endTime} meetingUrl={meetingUrl} subject={subject} />
}
InnerRoomState.propTypes = propTypes
InnerRoomState.defaultProps = defaultProps

const RoomState = ({ roomId, currentMeeting, nextMeeting }) => {
  return (
    <InnerRoomState
      roomId={roomId}
      currentMeeting={currentMeeting}
      nextMeeting={nextMeeting}
    />
  )
}

RoomState.propTypes = propTypes
RoomState.defaultProps = defaultProps

export default RoomState
