import _ from 'lodash'
import React, { PropTypes } from 'react'

import FormattedTime from '../FormattedTime'
import StateHeading from '../StateHeading'
import StateLink from '../StateLink'
import StateSubHeading from '../StateSubHeading'
import StateWrapper from '../StateWrapper'

const propTypes = {
  endTime: PropTypes.string.isRequired,
  meetingUrl: PropTypes.string.isRequired,
  subject: PropTypes.string.isRequired,
}

const Booked = ({ endTime, meetingUrl, subject }) => {
  if (_.some([endTime, meetingUrl], _.isEmpty)) return null

  return (
    <StateWrapper booked>
      <StateSubHeading>In session until&nbsp;<FormattedTime timestamp={endTime} /></StateSubHeading>
      <StateHeading>{subject}</StateHeading>
      <StateLink><span>Join this meeting at</span> {meetingUrl}</StateLink>
    </StateWrapper>
  )
}

Booked.propTypes = propTypes

export default Booked
