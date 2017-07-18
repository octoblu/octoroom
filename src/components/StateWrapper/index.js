import classNames from "classnames"
import PropTypes from "prop-types"
import React from "react"

import styles from "./styles.css"

const propTypes = {
  booked: PropTypes.bool,
  children: PropTypes.node,
  underconstruction: PropTypes.bool,
}
const defaultProps = {
  booked: false,
  underconstruction: false,
  children: null,
}

const StateWrapper = ({ booked, underconstruction, children }) => {
  if (!children) return null

  const classes = classNames(styles.root, {
    [`${styles.booked}`]: booked,
    [`${styles.underconstruction}`]: underconstruction,
  })
  return <div className={classes}>{children}</div>
}

StateWrapper.propTypes = propTypes
StateWrapper.defaultProps = defaultProps

export default StateWrapper
