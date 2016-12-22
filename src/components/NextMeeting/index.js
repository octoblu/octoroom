import _ from 'lodash'
import React, { PropTypes } from 'react'

import styles from './styles.css'

const propTypes = {
  nextMeeting: PropTypes.object,
}

const defaultProps = {
  nextMeeting: null,
}

const NextMeeting = ({ nextMeeting }) => {
  if (_.isEmpty(nextMeeting)) return null

  const { subject } = nextMeeting

  return (
    <div className={styles.root}>
      <div className={styles.next}>Next: {subject} /></div>
    </div>
  )
}

NextMeeting.propTypes    = propTypes
NextMeeting.defaultProps = defaultProps

export default NextMeeting
