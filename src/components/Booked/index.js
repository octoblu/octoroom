import _ from 'lodash'
import moment from 'moment'
import React, { PropTypes } from 'react'

import Heading from '../Heading'

import styles from './styles.css'

const propTypes = {
  endTime: PropTypes.string,
  meetingUrl: PropTypes.string,
  subject: PropTypes.string,
}

const defaultProps = {
  endTime: '',
  meetingUrl: '',
  subject: '',
}

const Booked = ({ endTime, meetingUrl, subject }) => {
  if (_.some([endTime, meetingUrl, subject], _.isEmpty)) return null

  const formattedEndTime = endTime ? `until ${moment(endTime).format('h:mm A')}` : null
  const meetingSubject   = subject ? <Heading>{subject}</Heading> : null

  return <div className={styles.root}>
    <div className={styles.booked}>Booked {formattedEndTime}</div>
    {meetingSubject}
    <div className={styles.bookingIndicator}><span className={styles.action}>Join:</span> {meetingUrl}</div>
  </div>
}

Booked.propTypes    = propTypes
Booked.defaultProps = defaultProps

export default Booked
