import isEmpty from "lodash/isEmpty"
import PropTypes from "prop-types"
import QR from "rc-qrcode"
import React from "react"
import MediaQuery from "react-responsive"

const propTypes = {
  url: PropTypes.string,
}

const QRCode = ({ url }) => {
  if (isEmpty(url)) return <span />

  return (
    <div>
      <MediaQuery minWidth={0} maxWidth={1224}>
        <QR
          renderer="auto"
          content={url}
          scale="2"
          margin="5"
          width="auto"
          height="auto"
          background="white"
          foreground="black"
        />
      </MediaQuery>
      <MediaQuery minWidth={1225}>
        <QR
          renderer="auto"
          content={url}
          scale="4"
          margin="10"
          width="auto"
          height="auto"
          background="white"
          foreground="black"
        />
      </MediaQuery>
    </div>
  )
}

QRCode.propTypes = propTypes

export default QRCode
