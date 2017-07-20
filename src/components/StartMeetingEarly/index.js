import React, { PropTypes } from "react"

const propTypes = {
  room: PropTypes.object,
}

const StartMeetingEarly = ({ room }) => {
  return (
    <StateLink>
      <div>Press the button to start the meeting early</div>
      <div>Hold the button for 3s to end meeting</div>
    </StateLink>
  )
}

StartMeetingEarly.propTypes = propTypes
StartMeetingEarly.defaultProps = defaultProps

export default StartMeetingEarly
