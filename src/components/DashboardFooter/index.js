import React, { PropTypes } from 'react'
import QRCode from '../QrCode'
import FormattedTime from '../FormattedTime/'
import styles from './styles.css'

const propTypes = {
  currentTime: PropTypes.string,
  url: PropTypes.string,
}

const defaultProps = {
  currentTime: '',
  url: '',
}

const DashboardFooter = ({ currentTime, url}) => {
  return (
    <div className={styles.root}>
      <QRCode url={url} />
      <FormattedTime timestamp={currentTime} />
    </div>
  )
}

DashboardFooter.propTypes    = propTypes
DashboardFooter.defaultProps = defaultProps

export default DashboardFooter
