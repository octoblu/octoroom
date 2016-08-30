import React, { PropTypes } from 'react'
import QRCode from 'qrcode-react'

const propTypes = {}
const defaultProps = {}

const QrCode = () => {
  return (
    <QRCode
      value="http://app.octoblu.com"
      logo="https://www.citrix.com/blogs/wp-content/uploads/2015/01/300x300spiral.png"
      bgColor="#FFFFFF"
      fgColor="#000000"
      size={250}
    />
  )
}

QrCode.propTypes    = propTypes
QrCode.defaultProps = defaultProps

export default QrCode
