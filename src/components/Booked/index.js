import React, { PropTypes } from 'react'
import styles from './styles.css'

const propTypes = {
  isBooked: PropTypes.bool
}
const defaultProps = {
  isBooked: false
}

const Booked = ({ isBooked }) => {
  const bookingStatus = isBooked ? 'Booked' : 'Available'
  return <div className={styles.root}>{bookingStatus}</div>
}

Booked.propTypes    = propTypes
Booked.defaultProps = defaultProps

export default Booked
