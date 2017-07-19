import styled from "emotion/react"
import isEmpty from "lodash/isEmpty"
import PropTypes from "prop-types"
import QR from "rc-qrcode"
import React from "react"

const SVG = styled("svg")`
  height: 6.23vw;
  height: 6.23vmax;
  width: 6.23vw;
  width: 6.23vmax;
`

const propTypes = {
  url: PropTypes.string,
}

const QRCode = ({ url }) => {
  if (isEmpty(url)) return <span />

  return (
    <div>
      <SVG viewBox="0 0 120 120">
        <QR
          renderer="auto"
          content={url}
          scale="4"
          margin="10"
          background="white"
          foreground="black"
        />
      </SVG>
    </div>
  )
}

QRCode.propTypes = propTypes

export default QRCode
