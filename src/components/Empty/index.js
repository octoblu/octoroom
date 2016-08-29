import React, { PropTypes } from 'react'
import View from 'react-flexbox'

import Speech from 'react-speech'

import styles from './styles.css'

const propTypes = {}
const defaultProps = {}

const Empty = () => {
  return (
    <View auto column className={styles.welcome}>
      <div>Welcome to the FUTURE!</div>
      <div className={styles.speechContainer}>
      </div>
    </View>
  )
}

Empty.propTypes    = propTypes
Empty.defaultProps = defaultProps

export default Empty
