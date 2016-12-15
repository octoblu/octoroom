import React, { PropTypes } from 'react'

const propTypes = {
  meetingUrl: PropTypes.string
}

const defaultProps = {}

const JoinMeetingLink = ({ meetingUrl }) => {
  return (
    <div>
      Join Meeting: <em>{meetingUrl}</em>
    </div>
  )
}

JoinMeetingLink.propTypes    = propTypes
JoinMeetingLink.defaultProps = defaultProps

export default JoinMeetingLink
