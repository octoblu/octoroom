import isEmpty from "lodash/isEmpty"
import get from "lodash/get"
import PropTypes from "prop-types"
import React from "react"

import StateHeading from "../StateHeading/"
import StateSubHeading from "../StateSubHeading/"
import StateWrapper from "../StateWrapper/"
import FormattedTime from "../FormattedTime"

const propTypes = {
  nextMeeting: PropTypes.object,
  roomId: PropTypes.string,
}

const AvailableUntil = ({ roomId, nextMeeting }) => {
  const meetingRoom = get(nextMeeting, `rooms.${roomId}`)
  let { startTime, subject } = meetingRoom
  if (isEmpty(subject)) subject = "Meeting"

  return (
    <StateWrapper>
      <StateHeading>
        Available until <FormattedTime timestamp={startTime} />
      </StateHeading>
      <StateSubHeading>Next: {subject}</StateSubHeading>
      <StateSubHeading>Press the button to Book Now</StateSubHeading>
    </StateWrapper>
  )
}

AvailableUntil.propTypes = propTypes

export default AvailableUntil
