import styled from "emotion/react"
import PropTypes from "prop-types"
import React from "react"

import QRCode from "../QrCode"

const Container = styled("div")`
  align-items: baseline;
  display: flex;
  flex-direction: row;
  font-size: 1.65vmax;
  font-size: 1.65vw;
  justify-content: space-between;
  padding: 0.83vmax 2.6vmax;
  padding: 0.83vw 2.6vw;
  width: 100%;
`

const TimeWrapper = styled("div")`
  align-items: center;
  display: flex;
`

const propTypes = {
  currentTime: PropTypes.string,
  url: PropTypes.string,
}

const defaultProps = {
  currentTime: "",
  url: "",
}

const DashboardFooter = ({ url }) => {
  return (
    <Container>
      <QRCode url={url} />
      <TimeWrapper />
    </Container>
  )
}

DashboardFooter.propTypes = propTypes
DashboardFooter.defaultProps = defaultProps

export default DashboardFooter
