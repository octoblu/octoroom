import get from "lodash/get"
import isEmpty from "lodash/isEmpty"
import React from "react"
import PropTypes from "prop-types"

import Available from "../Available"
import Booked from "../Booked"

const propTypes = {
  currentMeeting: PropTypes.object,
  inSkype: PropTypes.bool,
  nextMeeting: PropTypes.object,
  roomId: PropTypes.string,
  timezone: PropTypes.string,
}

const defaultProps = {
  currentMeeting: null,
  inSkype: false,
  nextMeeting: null,
  roomId: null,
  timezone: null,
}

const RoomState = ({
  currentMeeting,
  inSkype,
  nextMeeting,
  roomId,
  timezone,
}) => {
  if (isEmpty(roomId) || isEmpty(currentMeeting))
    return (
      <Available
        roomId={roomId}
        nextMeeting={nextMeeting}
        timezone={timezone}
      />
    )

  const currentMeetingRoom = get(currentMeeting, `rooms.${roomId}`)
  let { endTime, subject } = currentMeetingRoom

  if (isEmpty(subject)) subject = "Meeting"

  return (
    <Booked
      timezone={timezone}
      endTime={endTime}
      inSkype={inSkype}
      meetingUrl={currentMeeting.meetingUrl}
      subject={subject}
    />
  )
}

RoomState.propTypes = propTypes
RoomState.defaultProps = defaultProps

export default RoomState
