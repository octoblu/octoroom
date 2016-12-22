import React, { PropTypes } from 'react'

import Heading from '../Heading/'
import UpcomingMeetingIndicator from'../UpcomingMeetingIndicator/'
import styles from './styles.css'

const propTypes = {
  clientUrl: PropTypes.string,
  nextMeeting: PropTypes.object,
}

const defaultProps = {
  clientUrl: '',
  nextMeeting: null,
}

const Available = ({ clientUrl, nextMeeting }) => {
  return (
    <div className={styles.root}>
      <Heading className={styles.state}>Available</Heading>
      <UpcomingMeetingIndicator nextMeeting={nextMeeting} />
      { clientUrl && <div className={styles.bookingIndicator}><span className={styles.action}>Book Now:</span> {clientUrl}</div>}
    </div>
  )
}

Available.propTypes    = propTypes
Available.defaultProps = defaultProps

export default Available
