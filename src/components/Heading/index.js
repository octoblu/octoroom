import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.node,
}

const Heading = ({ children }) => {
  return <h1 className={styles.root}>{children}</h1>
}

Heading.propTypes = propTypes

export default Heading
