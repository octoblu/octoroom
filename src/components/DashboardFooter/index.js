import PropTypes from "prop-types"
import React from "react"

import FormattedTime from "../FormattedTime/"
import QRCode from "../QrCode"

import styles from "./styles.css"

const propTypes = {
  currentTime: PropTypes.string,
  url: PropTypes.string,
  loading: PropTypes.bool,
}

const defaultProps = {
  currentTime: "",
  url: "",
  loading: true,
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

DashboardFooter.propTypes = propTypes
DashboardFooter.defaultProps = defaultProps

export default DashboardFooter
