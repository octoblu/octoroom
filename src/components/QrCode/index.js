import React, { PropTypes } from 'react'
import QRCode from 'rc-qrcode'

import styles from './styles.css'

const propTypes = {
  url: PropTypes.string,
}
const defaultProps = {
  url: 'www.octoblu.com',
}

const QrCode = ({ url }) => {
  return (
    <div className={[styles.bottomRight]}>
      <QRCode
        renderer="auto"
        content={url}
        scale="5"
        margin="10"
        background="white"
        foreground="black"
      />
    </div>
  )
}

QrCode.propTypes    = propTypes
QrCode.defaultProps = defaultProps

export default QrCode
