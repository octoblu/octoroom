import _ from 'lodash'
import moment from 'moment'
import React, { PropTypes } from 'react'

import Heading from '../Heading'
import { getCurrentMeeting } from '../../models/meetings/'

import styles from './styles.css'

const propTypes = {
  meetings: PropTypes.object
}
const defaultProps = {}

const BookedHeader = ({ meetings }) => {
  const currentMeeting = getCurrentMeeting(meetings)
  if (_.isEmpty(currentMeeting)) return <Heading>Booked</Heading>

  const subject = _.get(currentMeeting, 'subject')
  const endTime = _.get(currentMeeting, 'endTime')

  const formattedEndTime = moment(endTime).format('h:mm a')

  return <div className={styles.root}>
    <Heading>Booked until {formattedEndTime}</Heading>
    <div className={styles.current}>{subject}</div>
  </div>
}

BookedHeader.propTypes    = propTypes
BookedHeader.defaultProps = defaultProps

export default BookedHeader
