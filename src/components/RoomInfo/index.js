import React, { PropTypes } from 'react'
import moment from 'moment'

import styles from './styles.css'

const propTypes = {
  currentTime: PropTypes.string,
  clientUrl: PropTypes.string,
  name: PropTypes.string.isRequired,
}

const RoomInfo = ({ currentTime, name }) => {
  let formattedTime = ''
  if (currentTime) formattedTime = moment(currentTime).format('h:mm')

  return (
    <div className={styles.root}>
      <div className={styles.metadata}>
        <div className={styles.time}>{formattedTime}</div>
        <div><strong>{name}</strong></div>
      </div>
    </div>
  )
}

RoomInfo.propTypes    = propTypes

export default RoomInfo
