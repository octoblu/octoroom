import React, { PropTypes } from 'react'
import Flexbox from 'react-flexbox'

import Heading from '../Heading/'
import UpcomingMeetingIndicator from'../UpcomingMeetingIndicator/'

import styles from './styles.css'

const propTypes = {
  meetings: PropTypes.object,
}

const Welcome = ({ meetings }) => {
  return (
    <Flexbox auto column className={styles.root}>
      <Heading>Available</Heading>
      <UpcomingMeetingIndicator meetings={meetings} />
    </Flexbox>
  )
}

Welcome.propTypes = propTypes

export default Welcome
