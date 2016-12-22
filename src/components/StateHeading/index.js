import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
}

const StateHeading = ({ children }) => {
  return <h1 className={styles.root}>{children}</h1>
}

StateHeading.propTypes = propTypes

export default StateHeading
