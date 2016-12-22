import React, { PropTypes } from 'react'
import _ from 'lodash'

import StateHeading from '../StateHeading/'
import StateLink from '../StateLink/'
import StateSubHeading from '../StateSubHeading/'
import StateWrapper from '../StateWrapper/'
import FormattedTime from '../FormattedTime'

const propTypes = {
  clientUrl: PropTypes.string,
  nextMeeting: PropTypes.object,
}

const defaultProps = {
  clientUrl: '',
  nextMeeting: null,
}

const Available = ({ clientUrl, nextMeeting }) => {
  if (_.isEmpty(nextMeeting)) {
    return (
      <StateWrapper>
        <StateHeading>Available</StateHeading>
        { clientUrl && <StateLink><span>Book Now:</span> {clientUrl}</StateLink>}
      </StateWrapper>
    )
  }

  return (
    <StateWrapper>
      <StateHeading>Available until <FormattedTime timestamp={nextMeeting.startTime} /></StateHeading>
      <StateSubHeading>Next: {nextMeeting.subject}</StateSubHeading>
      { clientUrl && <StateLink><span>Book Now:</span> {clientUrl}</StateLink>}
    </StateWrapper>
  )
}

Available.propTypes    = propTypes
Available.defaultProps = defaultProps

export default Available
