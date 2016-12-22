import React, { PropTypes } from 'react'
import _ from 'lodash'
import Heading from '../Heading/'
import NextMeeting from '../NextMeeting/'
import FormattedTime from '../FormattedTime'
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
  if(_.isEmpty(clientUrl ) || _.isEmpty(nextMeeting)) return null
  return (
    <div className={styles.root}>
      <Heading>Available until <FormattedTime timestamp={nextMeeting.startTime} /> </Heading>
      <NextMeeting nextMeeting={nextMeeting} />
      { clientUrl && <div className={styles.bookingIndicator}><span className={styles.action}>Book Now:</span> {clientUrl}</div>}
    </div>
  )
}

Available.propTypes    = propTypes
Available.defaultProps = defaultProps

export default Available
