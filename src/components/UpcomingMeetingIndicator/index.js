import _ from 'lodash'
import moment from 'moment'
import React, { PropTypes } from 'react'

import { getNextMeeting } from '../../models/meetings/'

import styles from './styles.css'

const propTypes = {
  meetings: PropTypes.object
}

const defaultProps = {
  meetings: {}
}

const UpcomingMeetingIndicator = ({ meetings }) => {
  const nextMeeting = getNextMeeting(meetings)

  if (_.isEmpty(nextMeeting)) return null

  const formattedStartTime = moment(nextMeeting.startTime).format('h:mm')

  return (
    <div className={styles.root}>
      <div className={styles.next}>Next: {nextMeeting.subject}  at {formattedStartTime}</div>
    </div>
  )
}

UpcomingMeetingIndicator.propTypes    = propTypes
UpcomingMeetingIndicator.defaultProps = defaultProps

export default UpcomingMeetingIndicator
