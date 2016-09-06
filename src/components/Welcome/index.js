import React, { PropTypes } from 'react'
import Flexbox from 'react-flexbox'

import Heading from '../Heading/'
import BookingIndicator from'../BookingIndicator/'

import styles from './styles.css'

const propTypes = {
  room: PropTypes.object,
}

const Welcome = () => {
  return (
    <Flexbox auto column className={styles.root}>
      <Heading>Welcome!</Heading>
      <BookingIndicator />
    </Flexbox>
  )
}

Welcome.propTypes = propTypes

export default Welcome
