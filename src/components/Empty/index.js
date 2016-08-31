import React, { PropTypes } from 'react'
import Flexbox from 'react-flexbox'
import Heading from '../Heading/'

import styles from './styles.css'

const propTypes = {
  clientUrl: PropTypes.string,
}

const defaultProps = {
  clientUrl: 'bit.ly/ctxroom',
}

const Empty = ({ clientUrl }) => {
  return (
    <Flexbox auto column className={styles.welcome}>
      <Heading>Welcome!</Heading>
      <div className={styles.body}></div>
    </Flexbox>
  )
}

Empty.propTypes    = propTypes
Empty.defaultProps = defaultProps

export default Empty
