import React, { PropTypes } from "react"

import FormattedEndTime from "../FormattedEndTime"
import MeetingUrl from "../MeetingUrl"
import StateHeading from "../StateHeading"
import StateWrapper from "../StateWrapper"
import SkypePrompt from "../SkypePrompt"

const propTypes = {
  endTime: PropTypes.string,
  inSkype: PropTypes.bool,
  meetingUrl: PropTypes.string,
  subject: PropTypes.string.isRequired,
}

const Booked = ({ endTime, inSkype, meetingUrl, subject }) => {
  return (
    <StateWrapper booked>
      <FormattedEndTime endTime={endTime} />
      <StateHeading>{subject}</StateHeading>
      <MeetingUrl meetingUrl={meetingUrl} />
      <SkypePrompt inSkype={inSkype} />
    </StateWrapper>
  )
}

Booked.propTypes = propTypes

export default Booked
