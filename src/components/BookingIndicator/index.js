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

const BookingIndicator = ({ meetings }) => {
  const nextMeeting = getNextMeeting(meetings)

  if (_.isEmpty(nextMeeting)) return null

  const formattedStartTime = moment(nextMeeting.startTime).format('h:mm a')

  return (
    <div className={styles.root}>
      <div className={styles.next}>Next: {nextMeeting.subject}  at {formattedStartTime}</div>
    </div>
  )
}

BookingIndicator.propTypes    = propTypes
BookingIndicator.defaultProps = defaultProps

export default BookingIndicator
