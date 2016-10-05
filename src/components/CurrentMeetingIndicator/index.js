import _ from 'lodash'
import moment from 'moment'
import React, { PropTypes } from 'react'

import Heading from '../Heading'

import styles from './styles.css'

const propTypes = {
  currentMeeting: PropTypes.object
}

const defaultProps = {
  currentMeeting: null
}

const CurrentMeetingIndicator = ({ currentMeeting }) => {
  if (_.isEmpty(currentMeeting)) return null

  const subject = _.get(currentMeeting, 'subject')
  const endTime = _.get(currentMeeting, 'endTime')

  const meetingSubject   = subject ? <div className ={styles.current}>{subject}</div> : null
  const formattedEndTime = endTime ? `until ${moment(endTime).format('h:mm')}` : null

  return <div className={styles.root}>
    <Heading>Booked {formattedEndTime}</Heading>
    {meetingSubject}
  </div>
}

CurrentMeetingIndicator.propTypes    = propTypes
CurrentMeetingIndicator.defaultProps = defaultProps

export default CurrentMeetingIndicator
