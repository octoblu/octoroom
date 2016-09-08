import React, { PropTypes } from 'react'
import styles from './styles.css'

const propTypes = {
  inSession: PropTypes.bool,
}

const defaultProps = {
  inSession: false,
}

const SkypeSessionIndicator = ({ inSession }) => {
  const skypeColor = inSession ? 'blue' : 'white'

  return (
    <img
      src={`//cdn.octoblu.com/images/skype-${skypeColor}.png`}
      alt="Skype"
      className={styles.root}
    />
  )
}

SkypeSessionIndicator.propTypes    = propTypes
SkypeSessionIndicator.defaultProps = defaultProps

export default SkypeSessionIndicator
