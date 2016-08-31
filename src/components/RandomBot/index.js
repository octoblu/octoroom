import _ from 'lodash'
import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  serial: PropTypes.number,
}

const defaultProps = {
  serial: _.random(1, 9),
}

const Bot = ({ serial }) => {
  return (
    <img
      src={`//cdn.octoblu.com/robots/robot${serial}.png`}
      alt={`OctoBot${serial}`}
      className={styles.bot}
    />
  )
}

Bot.propTypes = propTypes
Bot.defaultProps = defaultProps
export default Bot
