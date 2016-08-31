import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  clientUrl: PropTypes.string,
  location: PropTypes.string,
  name: PropTypes.string.isRequired,
}

const defaultProps = {
  location: 'Tempe, Arizona',
}

const RoomInfo = ({ name, location, clientUrl }) => {
  return (
    <div className={styles.root}>
      <div className={styles.metadata}>
        <div><strong>{name}</strong></div>
        <div>{location}</div>
      </div>
    </div>
  )
}

RoomInfo.propTypes    = propTypes
RoomInfo.defaultProps = defaultProps

export default RoomInfo
