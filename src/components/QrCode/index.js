import _ from 'lodash'
import React, { PropTypes } from 'react'
import QR from 'rc-qrcode'
import styles from './styles.css'

const propTypes = {
  url: PropTypes.string,
}

const defaultProps = {}

const QRCode = ({ url }) => {
  if (_.isEmpty(url)) return <span />

  return (
    <div className={styles.root}>
      <QR
        renderer="auto"
        content={url}
        scale="4"
        margin="10"
        background="white"
        foreground="black"
      />
    </div>
  )
}

QRCode.propTypes    = propTypes
QRCode.defaultProps = defaultProps

export default QRCode
