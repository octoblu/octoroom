import PropTypes from "prop-types"
import React from "react"

import ActivityPrompt from "../ActivityPrompt"
import FormattedEndTime from "../FormattedEndTime"
import MeetingUrl from "../MeetingUrl"
import StateHeading from "../StateHeading"
import StateWrapper from "../StateWrapper"
import { returnLocalTime } from "../../services/timezone-service"
import isEmpty from "lodash/isEmpty"
import moment from "moment"

const propTypes = {
  endTime: PropTypes.string,
  inSkype: PropTypes.bool,
  meetingUrl: PropTypes.string,
  subject: PropTypes.string.isRequired,
  timezone: PropTypes.string,
}

const Booked = ({ endTime, inSkype, meetingUrl, subject, timezone }) => {
  console.log("timezone is", timezone)
  var endTimeTZ = isEmpty(timezone) ? endTime : returnLocalTime(endTime)

  return (
    <StateWrapper booked>
      <FormattedEndTime endTime={endTimeTZ} />
      <StateHeading>{subject}</StateHeading>
      <MeetingUrl meetingUrl={meetingUrl} />
      <ActivityPrompt inSkype={inSkype} />
    </StateWrapper>
  )
}

Booked.propTypes = propTypes

export default Booked
