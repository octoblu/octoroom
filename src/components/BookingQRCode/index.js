import React, { PropTypes } from 'react'
import QRCode from 'rc-qrcode'
import styles from './styles.css'

const propTypes = {
  clientUrl: PropTypes.string,
}

const defaultProps = {}

const BookingQRCode = ({ clientUrl }) => {
  return (
    <div className={styles.root}>
      <QRCode
        renderer="auto"
        content={clientUrl}
        scale="5"
        margin="10"
        background="white"
        foreground="black"
      />
    </div>
  )
}

BookingQRCode.propTypes    = propTypes
BookingQRCode.defaultProps = defaultProps

export default BookingQRCode
