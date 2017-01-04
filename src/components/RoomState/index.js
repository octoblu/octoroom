import _ from 'lodash'
import React, { PropTypes } from 'react'

import Available from '../Available'
import Booked from '../Booked'

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

  let {endTime, meetingUrl, subject} = currentMeeting
  if (_.isEmpty(subject)) subject = 'Meeting'

  return (
    <Booked
      endTime={endTime}
      meetingUrl={meetingUrl}
      subject={subject}
    />
  )
}

RoomState.propTypes    = propTypes
RoomState.defaultProps = defaultProps

export default RoomState
