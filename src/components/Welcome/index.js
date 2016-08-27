import React, { PropTypes } from 'react'
import View from 'react-flexbox'

import Speech from 'react-speech'

import styles from './styles.css'

const propTypes = {}
const defaultProps = {}

const Welcome = () => {
  return (
    <View auto column className={styles.welcome}>
      <div>Welcome to the FUTURE!</div>
      <div className={styles.speechContainer}>
      </div>
    </View>
  )
}

Welcome.propTypes    = propTypes
Welcome.defaultProps = defaultProps

export default Welcome
