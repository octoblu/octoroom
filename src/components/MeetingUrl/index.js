import _ from 'lodash'
import React, { PropTypes } from 'react'

import StateLink from '../StateLink'

const propTypes = {
  meetingUrl: PropTypes.string
}

const MeetingUrl = ({ meetingUrl }) => {
  if (_.isEmpty(meetingUrl)) {
    return <StateLink><span>Error finding the meeting URL</span></StateLink>
  }

  return <StateLink><span>Join this meeting at</span> {meetingUrl}</StateLink>
}

MeetingUrl.propTypes = propTypes

export default MeetingUrl
