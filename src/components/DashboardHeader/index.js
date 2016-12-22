import React from 'react'
import Flexbox from 'react-flexbox'

import styles from './styles.css'

const DashboardHeader = ({ name }) => {
  return (
    <Flexbox auto className={styles.header}>
      <span>Citrix Smart Spaces</span>
      <div>{name}</div>
    </Flexbox>
  )
}

export default DashboardHeader
