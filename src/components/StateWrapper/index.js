import classNames from 'classnames'
import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  booked: PropTypes.bool,
  children: PropTypes.node,

}
const defaultProps = {
  booked: false,
  children: null
}

const StateWrapper = ({ booked, children }) => {
  if (!children) return null

  const classes = classNames(styles.root, { [`${styles.booked}`]: booked })
  return <div className={classes}>{children}</div>
}

StateWrapper.propTypes    = propTypes
StateWrapper.defaultProps = defaultProps

export default StateWrapper
