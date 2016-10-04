import React, { PropTypes } from 'react'

import Welcome from '../Welcome/'
import Heading from '../Heading/'
import Occupied from '../Occupied/'
import Spit from '../Spit/'
import BookedHeader from '../BookedHeader'

import styles from './styles.css'

const propTypes = {
  roomName: PropTypes.string,
  booked: PropTypes.bool,
  meetings: PropTypes.object,
  peopleInRoom: PropTypes.array,
  speechText: PropTypes.string,
  notificationText: PropTypes.string,
}

const defaultProps = {
  booked: false,
  meetings: null,
  peopleInRoom: [],
  speechText: '',
  notificationText: '',
  roomName: '',
}

const RoomState = ({ booked, meetings, peopleInRoom, speechText, notificationText, roomName }) => {
  return (
    <div className={styles.root}>
      {(booked) && <BookedHeader meetings={meetings}/>}
      {(!booked) && <Welcome roomName={roomName} meetings={meetings} />}

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
