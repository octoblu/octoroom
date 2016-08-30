import _ from 'lodash'
import React, { PropTypes } from 'react'
import Heading from 'zooid-heading'
import List, { ListItem } from 'zooid-list'
import pluralize from 'pluralize'

const propTypes = {
  peopleInRoom: PropTypes.array,
}

const defaultProps = {
  peopleInRoom: [],
}

const Occupied = ({ peopleInRoom }) => {
  if (_.isEmpty(peopleInRoom)) return null

  const people = _.map(peopleInRoom, ({ name, userUuid }) => {
    return <ListItem key={userUuid}>{name || 'Guest'} </ListItem>
  })

  return (
    <div>
      <Heading>
        Occupied - {pluralize('Person', peopleInRoom.length, true)}
      </Heading>

      <List>{people}</List>
    </div>
  )
}

Occupied.propTypes    = propTypes
Occupied.defaultProps = defaultProps

export default Occupied
