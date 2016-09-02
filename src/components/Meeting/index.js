import React, { PropTypes } from 'react'
import _ from 'lodash'
const propTypes = {
  bookings: PropTypes.object
}


const defaultProps = {
  bookings: null
}

const Meeting = ({ bookings }) => {
  if(_.isEmpty(bookings)) return null
  return(<div>Meeting</div>)
}

Meeting.propTypes    = propTypes
Meeting.defaultProps = defaultProps

export default Meeting
