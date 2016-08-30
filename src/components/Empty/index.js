import React, { PropTypes } from 'react'
import View from 'react-flexbox'
import QrCode from '../QrCode/'

import styles from './styles.css'

const propTypes = {}
const defaultProps = {}

const Empty = () => {
  return (
    <View auto column className={styles.welcome}>
      <div>Welcome to the OctoRoom</div>

      <QrCode url="www.google.com" />

    </View>
  )
}

Empty.propTypes    = propTypes
Empty.defaultProps = defaultProps

export default Empty
