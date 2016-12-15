import _ from 'lodash'
import moment from 'moment'
import React, { PropTypes } from 'react'

import Heading from '../Heading'

import styles from './styles.css'

const propTypes = {
  currentMeeting: PropTypes.object,
}

const defaultProps = {
  currentMeeting: null,
}

const CurrentMeetingIndicator = ({ currentMeeting}) => {
  if (_.isEmpty(currentMeeting)) return null

  const endTime   = _.get(currentMeeting, 'endTime')
  const meetingId = _.get(currentMeeting, 'meetingId')
  const subject   = _.get(currentMeeting, 'subject')

  const formattedEndTime = endTime ? `until ${moment(endTime).format('h:mm')}` : null
  const meetingSubject   = subject ? <div className ={styles.current}>{subject}</div> : null
  const joinMeetingLink  = null
  // const joinMeetingLink  = meetingId ? <div className ={styles.current}>{`https://WAT.IS.THIS/meetings/${meetingUrl}`}</div> : null

  return <div className={styles.root}>
    <Heading>Booked {formattedEndTime}</Heading>
    {meetingSubject}
    {joinMeetingLink}
  </div>
}

CurrentMeetingIndicator.propTypes    = propTypes
CurrentMeetingIndicator.defaultProps = defaultProps

export default CurrentMeetingIndicator
