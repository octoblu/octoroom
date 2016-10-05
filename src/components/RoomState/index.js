import _ from 'lodash'
import React, { PropTypes } from 'react'

import CurrentMeetingIndicator from '../CurrentMeetingIndicator'
import Spit from '../Spit/'
import Welcome from '../Welcome/'

import styles from './styles.css'

const propTypes = {
  currentMeeting: PropTypes.object,
  meetings: PropTypes.object,
  notificationText: PropTypes.string,
  speechText: PropTypes.string,
}

const defaultProps = {
  currentMeeting: null,
  meetings: null,
  notificationText: '',
  speechText: '',
}

const RoomState = ({ currentMeeting, meetings, notificationText, speechText }) => {
  return (
    <div className={styles.root}>
      {(_.isEmpty(currentMeeting)) && <Welcome meetings={meetings} />}
      <CurrentMeetingIndicator currentMeeting={currentMeeting} />

      <div className={styles.speechContainer}>
        <Spit autoPlay text={speechText} />
        <Spit autoPlay text={notificationText} />
      </div>
    </div>
  )
}

RoomState.propTypes    = propTypes
RoomState.defaultProps = defaultProps

export default RoomState
