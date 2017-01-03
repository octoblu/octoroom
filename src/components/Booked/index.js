import _ from 'lodash'
import React, { PropTypes } from 'react'

import FormattedTime from '../FormattedTime'
import StateHeading from '../StateHeading'
import StateLink from '../StateLink'
import StateSubHeading from '../StateSubHeading'
import StateWrapper from '../StateWrapper'

const propTypes = {
  endTime: PropTypes.string,
  meetingUrl: PropTypes.string,
  subject: PropTypes.string,
}

const defaultProps = {
  endTime: '',
  meetingUrl: '',
  subject: '',
}

const Booked = ({ endTime, meetingUrl, subject }) => {
  if (_.some([endTime, meetingUrl], _.isEmpty)) return null

  return (
    <StateWrapper booked>
      { subject || <StateHeading>Meeting</StateHeading>}
      <StateSubHeading>Booked until&nbsp;<FormattedTime timestamp={endTime} /></StateSubHeading>
      <StateLink><span>Join:</span> {meetingUrl}</StateLink>
    </StateWrapper>
  )
}

Booked.propTypes    = propTypes
Booked.defaultProps = defaultProps

export default Booked
