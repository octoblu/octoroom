import isEmpty from "lodash/isEmpty"
import PropTypes from "prop-types"
import React from "react"

import FormattedTime from "../FormattedTime"
import StateSubHeading from "../StateSubHeading"

const propTypes = {
  className: PropTypes.string,
  endTime: PropTypes.string,
}

const FormattedEndTime = ({ endTime }) => {
  if (isEmpty(endTime)) {
    return <StateSubHeading>Error finding the meeting end time</StateSubHeading>
  }

  return (
    <StateSubHeading>
      In session until&nbsp;<FormattedTime timestamp={endTime} />
    </StateSubHeading>
  )
}

FormattedEndTime.propTypes = propTypes

export default FormattedEndTime
