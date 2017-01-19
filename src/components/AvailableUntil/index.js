import _ from 'lodash'
import React, { PropTypes } from 'react'

import StateHeading from '../StateHeading/'
import StateSubHeading from '../StateSubHeading/'
import StateWrapper from '../StateWrapper/'
import FormattedTime from '../FormattedTime'

const propTypes = {
  nextMeeting: PropTypes.object,
}

const AvailableUntil = ({ nextMeeting }) => {
  let { startTime, subject } = nextMeeting
  if (_.isEmpty(subject)) subject = 'Meeting'

  return (
    <StateWrapper>
      <StateHeading>Available until <FormattedTime timestamp={startTime} /></StateHeading>
      <StateSubHeading>Next: {subject}</StateSubHeading>
      <StateSubHeading>Press the button to Book Now</StateSubHeading>
    </StateWrapper>
  )
}

AvailableUntil.propTypes = propTypes

export default AvailableUntil
