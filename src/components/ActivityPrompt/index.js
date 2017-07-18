import PropTypes from "prop-types"
import React from "react"

import StateLink from "../StateLink"

const propTypes = {
  inSkype: PropTypes.bool.isRequired,
}

const ActivityPrompt = ({ inSkype }) => {
  return (
    <StateLink>
      <div>Press the button to {inSkype ? "end" : "start"} Skype</div>
      <div>Hold the button for 3s to end meeting</div>
    </StateLink>
  )
}

ActivityPrompt.propTypes = propTypes

export default ActivityPrompt
