import React, { PropTypes } from 'react'
import Flexbox from 'react-flexbox'


import styles from './styles.css'

const propTypes = {
  clientUrl: PropTypes.string,
}

const defaultProps = {
  clientUrl: 'https://bit.ly/ctxroom',
}

const Empty = ({ clientUrl }) => {
  return (
    <Flexbox auto column className={styles.welcome}>

    <div>Welcome!</div>
     To join the room, go to
      <a href={clientUrl}>{clientUrl}</a>
    </Flexbox>
  )
}

Empty.propTypes    = propTypes
Empty.defaultProps = defaultProps

export default Empty
