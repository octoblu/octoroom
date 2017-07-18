import isEmpty from "lodash/isEmpty"
import PropTypes from "prop-types"
import React from "react"

import AvailableAllDay from "../AvailableAllDay/"
import AvailableUntil from "../AvailableUntil/"

const propTypes = {
  nextMeeting: PropTypes.object,
  roomId: PropTypes.string,
}

const Available = ({ roomId, nextMeeting }) => {
  if (isEmpty(nextMeeting)) return <AvailableAllDay />

  return <AvailableUntil roomId={roomId} nextMeeting={nextMeeting} />
}

Available.propTypes = propTypes

export default Available
