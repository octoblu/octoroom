import React, { PropTypes } from 'react'
import moment from 'moment'

import styles from './styles.css'

const propTypes = {
  currentTime: PropTypes.string,
  clientUrl: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string.isRequired,
}

const defaultProps = {
  location: 'Tempe, Arizona',
}

const RoomInfo = ({ currentTime, name, location }) => {
  let formattedTime = ''
  if (currentTime) formattedTime = moment(currentTime).format('h:mm')

  return (
    <div className={styles.root}>
      <div className={styles.metadata}>
        <div>{formattedTime}</div>
        <div><strong>{name}</strong></div>
        <div>{location}</div>
      </div>
    </div>
  )
}

RoomInfo.propTypes    = propTypes
RoomInfo.defaultProps = defaultProps

export default RoomInfo
