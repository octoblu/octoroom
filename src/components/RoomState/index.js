import _ from 'lodash'
import React, { PropTypes } from 'react'
import Flexbox from 'react-flexbox'

import Empty from '../Empty/'
import Heading from '../Heading/'
import Occupied from '../Occupied/'
import Spit from '../Spit/'

import styles from './styles.css'

const propTypes = {
  booked: PropTypes.bool,
  peopleInRoom: PropTypes.array,
  inSkype: PropTypes.bool,
  speechText: PropTypes.string,
}

const defaultProps = {
  booked: false,
  peopleInRoom: [],
  inSkype: false,
  speechText: '',
}

const RoomState = ({ booked, peopleInRoom, inSkype, speechText }) => {
  if (_.isEmpty(peopleInRoom)) return <Empty />
  
  return (
    <Flexbox className={styles.root} auto column>
      {(booked) && <Heading>Room Booked</Heading>}
      {(!booked) && <Heading>Room Available</Heading>}

      <Occupied peopleInRoom={peopleInRoom} />

      <div className={styles.speechContainer}>
        <Spit autoPlay text={speechText} />
      </div>
    </Flexbox>
  )
}

RoomState.propTypes    = propTypes
RoomState.defaultProps = defaultProps

export default RoomState
