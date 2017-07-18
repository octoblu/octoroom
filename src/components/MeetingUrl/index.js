import isEmpty from "lodash/isEmpty"
import PropTypes from "prop-types"
import React from "react"

import StateLink from "../StateLink"

const propTypes = {
  meetingUrl: PropTypes.string,
}

const MeetingUrl = ({ meetingUrl }) => {
  if (isEmpty(meetingUrl)) {
    return <StateLink><span>Error finding the meeting URL</span></StateLink>
  }

  return <StateLink><span>Join this meeting at</span> {meetingUrl}</StateLink>
}

MeetingUrl.propTypes = propTypes

export default MeetingUrl
