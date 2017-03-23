import React, { PropTypes } from 'react'
import QRCode from '../QrCode'
import FormattedTime from '../FormattedTime/'
import styles from './styles.css'
import ZooidSpinner from 'zooid-spinner'

const propTypes = {
  currentTime: PropTypes.string,
  url: PropTypes.string,
  loading: PropTypes.bool,
}

const defaultProps = {
  currentTime: '',
  url: '',
  loading: true,
}

const Loading = ({loading}) => {
  const classes = [ styles.spinner ]
  if(!loading) classes.push(styles.hidden)

  return <ZooidSpinner className={classes.join(' ')} />
}

Loading.propTypes = {
  loading: PropTypes.bool
}

const DashboardFooter = ({ currentTime, url }) => {
  return (
    <div className={styles.root}>
      <QRCode url={url} />
      <div className={styles.lowerRight}>
        <FormattedTime timestamp={currentTime} />
      </div>
    </div>
  )
}

DashboardFooter.propTypes    = propTypes
DashboardFooter.defaultProps = defaultProps

export default DashboardFooter
