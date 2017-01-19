import _ from 'lodash'
import React, { PropTypes } from 'react'

import AvailableAllDay from '../AvailableAllDay/'
import AvailableUntil from '../AvailableUntil/'

const propTypes = {
  nextMeeting: PropTypes.object.isRequired,
}

const Available = ({ nextMeeting }) => {
  if (_.isEmpty(nextMeeting)) return <AvailableAllDay />

  return <AvailableUntil nextMeeting={nextMeeting} />
}

Available.propTypes = propTypes

export default Available
