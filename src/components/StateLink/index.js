import PropTypes from "prop-types"
import React from "react"

import styles from "./styles.css"

const propTypes = {
  children: PropTypes.node,
}

const StateLink = ({ children }) => {
  if (!children) return null
  return <div className={styles.root}>{children}</div>
}

StateLink.propTypes = propTypes

export default StateLink
