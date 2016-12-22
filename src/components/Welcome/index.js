import React, { PropTypes } from 'react'
import Flexbox from 'react-flexbox'

import NextMeeting from'../NextMeeting/'

import styles from './styles.css'

const propTypes = {
  meetings: PropTypes.object,
  currentTime: PropTypes.string,
}

const Welcome = ({ meetings, currentTime }) => {
  return (
    <Flexbox auto column className={styles.root}>
      <Heading>Available</Heading>
      <NextMeeting meetings={meetings} currentTime={currentTime} />
    </Flexbox>
  )
}

Welcome.propTypes = propTypes

export default Welcome
