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

  const subject = _.get(currentMeeting, 'subject')
  const endTime = _.get(currentMeeting, 'endTime')

  const formattedEndTime = endTime ? ` until ${moment(endTime).format('h:mm a')}` : null

  return <div className={styles.root}>
    <Heading>Booked{formattedEndTime}</Heading>
    <div className={styles.current}>{subject}</div>
  </div>
}

BookedHeader.propTypes    = propTypes
BookedHeader.defaultProps = defaultProps

export default BookedHeader
