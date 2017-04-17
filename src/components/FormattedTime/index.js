import _ from "lodash"
import moment from "moment"
import React, { PropTypes } from "react"

import styles from "./styles.css"

const propTypes = {
  timestamp: PropTypes.string,
  className: PropTypes.string,
}

const FormattedTime = ({ timestamp }) => {
  if (_.isEmpty(timestamp)) return null

  const formattedTime = moment(timestamp).format("h:mm A")

  return <span className={styles.root}>{formattedTime}</span>
}

FormattedTime.propTypes = propTypes

export default FormattedTime
