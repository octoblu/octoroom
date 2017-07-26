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
    </StateLink>
  )
}

ActivityPrompt.propTypes = propTypes

export default ActivityPrompt
