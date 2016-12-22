import _ from 'lodash'
import React, { PropTypes } from 'react'

import Available from '../Available'
import CurrentMeetingIndicator from '../CurrentMeetingIndicator'

const propTypes = {
  clientUrl: PropTypes.string,
  currentMeeting: PropTypes.object,
  nextMeeting: PropTypes.object,
}

const defaultProps = {
  clientUrl: '',
  currentMeeting: null,
  nextMeeting: null,
}

const RoomState = ({ clientUrl, currentMeeting, nextMeeting }) => {
  if (_.isEmpty(currentMeeting)) return <Available clientUrl={clientUrl} nextMeeting={nextMeeting} />

  const {endTime, meetingUrl, subject} = currentMeeting
  return (
    <CurrentMeetingIndicator
      endTime={endTime}
      meetingUrl={meetingUrl}
      subject={subject}
    />
  )
}

RoomState.propTypes    = propTypes
RoomState.defaultProps = defaultProps

export default RoomState
