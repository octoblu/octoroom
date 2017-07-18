import Debug from "debug"
import _ from "lodash"
import React, { PropTypes } from "react"

import StateLink from "../StateLink"

const debug = Debug("dashboard:components:SkypePrompt")

const propTypes = {
  inSkype: PropTypes.bool.isRequired,
}

const SkypePrompt = ({ inSkype }) => {
  debug("inSkype", inSkype)
  if (inSkype)
    return <StateLink><span>Press the button to end Skype</span></StateLink>

  return <StateLink><span>Press the button to start Skype</span></StateLink>
}

SkypePrompt.propTypes = propTypes

export default SkypePrompt
