import React, { PropTypes } from 'react'
import Flexbox from 'react-flexbox'

import Heading from '../Heading/'
import BookingIndicator from'../BookingIndicator/'

import styles from './styles.css'

const propTypes = {
  roomName: PropTypes.string,
  meetings: PropTypes.object,
}

const Welcome = ({ roomName, meetings }) => {
  return (
    <Flexbox auto column className={styles.root}>
      <Heading>{roomName}</Heading>
      <BookingIndicator meetings={meetings} />
    </Flexbox>
  )
}

Welcome.propTypes = propTypes

export default Welcome
