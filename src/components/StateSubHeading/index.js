import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
}

const StateSubHeading = ({ children }) => {
  if (!children) return null

  return <div className={styles.root}>{children}</div>
}

StateSubHeading.propTypes = propTypes

export default StateSubHeading
