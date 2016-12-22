import React, { PropTypes } from 'react'

import FormattedTime from '../FormattedTime/'
import styles from './styles.css'

const propTypes = {
  currentTime: PropTypes.string,
}

const defaultProps = {
  currentTime: '',
}

const DashboardFooter = ({ currentTime }) => {
  return (
    <div className={styles.root}>
      <FormattedTime timestamp={currentTime} />
    </div>
  )
}

DashboardFooter.propTypes    = propTypes
DashboardFooter.defaultProps = defaultProps

export default DashboardFooter
