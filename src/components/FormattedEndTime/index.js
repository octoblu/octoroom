import isEmpty from "lodash/isEmpty"
import React, { PropTypes } from "react"

import FormattedTime from "../FormattedTime"
import StateSubHeading from "../StateSubHeading"

const propTypes = {
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
