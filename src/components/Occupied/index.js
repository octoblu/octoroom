import _ from 'lodash'
import React, { PropTypes } from 'react'

const propTypes = {
  peopleInRoom: PropTypes.array,
}

const defaultProps = {
  peopleInRoom: [],
}

let occupants = []

const Occupied = ({ peopleInRoom }) => {
  if (_.isEmpty(peopleInRoom)) return null

  const lastPersonInRoom = _.last(peopleInRoom)
  const speechText = `Welcome ${lastPersonInRoom.name || 'Guest'}`

  occupants = _.difference(peopleInRoom, occupants)

  return (
    <div>
      Occupied
    </div>
  )
}

Occupied.propTypes    = propTypes
Occupied.defaultProps = defaultProps

export default Occupied
