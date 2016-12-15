import _ from 'lodash'
import React, { PropTypes } from 'react'

import JoinMeetingLink from '../JoinMeetingLink'
import JoinMeetingQRCode from '../JoinMeetingQRCode'

import styles from './styles.css'

const propTypes = {
  meetingUrl: PropTypes.string
}

const defaultProps = {
  meetingUrl: ''
}

const JoinMeeting = ({ meetingUrl }) => {
  if (_.isEmpty(meetingUrl)) return null

  return (
    <div className={styles.container}>
      <JoinMeetingLink meetingUrl={meetingUrl} />
      <JoinMeetingQRCode meetingUrl={meetingUrl} />
    </div>
  )
}

JoinMeeting.propTypes    = propTypes
JoinMeeting.defaultProps = defaultProps

export default JoinMeeting
