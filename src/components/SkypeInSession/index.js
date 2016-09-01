import React, { PropTypes } from 'react'
import styles from './styles.css'

const propTypes = {
  inSession: PropTypes.bool,
}

const defaultProps = {
  inSession: false,
}

const SkypeInSession = ({ inSession }) => {
  const skypeColor = inSession ? 'blue' : 'white'

  return (
    <img
      src={`//cdn.octoblu.com/images/skype-${skypeColor}.png`}
      alt="Skype"
      className={styles.root}
    />
  )
}

SkypeInSession.propTypes    = propTypes
SkypeInSession.defaultProps = defaultProps

export default SkypeInSession
