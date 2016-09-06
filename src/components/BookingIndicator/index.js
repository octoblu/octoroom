import moment from 'moment'
import _ from 'lodash'
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

  console.log('nextMeeting', nextMeeting);

  return (
    <div className={styles.root}>
      <div className={styles.next}>Next: {nextMeeting.subject} at {moment(nextMeeting.startTime).format('h:mm a')}</div>
    </div>
  )
}

BookingIndicator.propTypes    = propTypes
BookingIndicator.defaultProps = defaultProps

export default BookingIndicator
