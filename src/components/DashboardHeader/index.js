import React, { PropTypes } from 'react'
import Flexbox from 'react-flexbox'

import styles from './styles.css'

const propTypes = {
  name: PropTypes.string,
}

const DashboardHeader = ({ name }) => {
  return (
    <Flexbox auto className={styles.header}>
      <span>Citrix Smart Spaces</span>
      <div>{name}</div>
    </Flexbox>
  )
}

DashboardHeader.propTypes = propTypes

export default DashboardHeader
