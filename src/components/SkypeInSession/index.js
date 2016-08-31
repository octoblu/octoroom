import React, { PropTypes } from 'react'
import styles from './styles.css'
const propTypes = {
  inSession: PropTypes.bool,
}
const defaultProps = {
  inSession: false,
}

const SkypeInSession = ({ inSession }) => {
  const skypeColor = inSession ? 'blue' : 'gray'
  return (
    <div className={styles.root}>
      <img
        src={`//cdn.octoblu.com/images/skype-${skypeColor}.png`}
        className={styles.skypeLogo}
      />
    </div>)
}

SkypeInSession.propTypes    = propTypes
SkypeInSession.defaultProps = defaultProps

export default SkypeInSession
