import _ from 'lodash'
import React, { PropTypes } from 'react'

import styles from './styles.css'

const BookingIndicator = () => {
  return (
    <div className={styles.root}>
      <div className={styles.next}>Up Next: Taxonomy Planning Meeting at 10:00 AM</div>
    </div>
  )
}

export default BookingIndicator
