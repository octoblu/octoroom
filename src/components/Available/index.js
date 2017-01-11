import _ from 'lodash'
import React, { PropTypes } from 'react'

import StateHeading from '../StateHeading/'
import StateSubHeading from '../StateSubHeading/'
import StateWrapper from '../StateWrapper/'
import FormattedTime from '../FormattedTime'

const propTypes = {
  nextMeeting: PropTypes.object,
}

const defaultProps = {
  nextMeeting: null,
}

const Available = ({ nextMeeting }) => {

  if (_.isEmpty(nextMeeting)) {
    return (
      <StateWrapper>
        <StateHeading>Available all day</StateHeading>
        <StateSubHeading>Press the button to Book Now</StateSubHeading>
      </StateWrapper>
    )
  }

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

Available.propTypes    = propTypes
Available.defaultProps = defaultProps

export default Available
