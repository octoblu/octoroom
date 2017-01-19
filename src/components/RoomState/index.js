import _ from 'lodash'
import React, { PropTypes } from 'react'

import Available from '../Available'
import Booked from '../Booked'
import styles from './styles.css'

import ZooidSpinner from 'zooid-spinner'

const propTypes = {
  currentMeeting: PropTypes.object,
  nextMeeting: PropTypes.object,
  loading: PropTypes.bool,
}

const defaultProps = {
  currentMeeting: null,
  nextMeeting: null,
}

const Loading = ({loading}) => {
  const classes = [ styles.spinner ]
  if(!loading) classes.push(styles.hidden)

  return <ZooidSpinner className={classes.join(' ')} />
}

const InnerRoomState = ({ currentMeeting, nextMeeting }) => {
  if (_.isEmpty(currentMeeting)) return <Available nextMeeting={nextMeeting} />

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

const RoomState = ({ currentMeeting, nextMeeting, loading }) => {
  return (
    <div className={styles.roomState}>
      <InnerRoomState currentMeeting={currentMeeting} nextMeeting={nextMeeting} />
      <Loading loading={loading} />
    </div>
  )
}


RoomState.propTypes    = propTypes
RoomState.defaultProps = defaultProps

export default RoomState
