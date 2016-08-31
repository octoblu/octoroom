import _ from 'lodash'
import pluralize from 'pluralize'
import React, { PropTypes } from 'react'
import Flexbox from 'react-flexbox'
import List, { ListItem } from 'zooid-list'

import Heading from '../Heading/'
import RandomBot from '../RandomBot/'
import OccupantList from '../OccupantList/'

import styles from './styles.css'

const propTypes = {
  peopleInRoom: PropTypes.array,
}

const defaultProps = {
  peopleInRoom: [],
}

const Occupied = ({ peopleInRoom }) => {
  if (_.isEmpty(peopleInRoom)) return null

  return (
    <Flexbox column className={styles.root}>
      <OccupantList occupants={peopleInRoom} />
    </Flexbox>
  )
}

Occupied.propTypes    = propTypes
Occupied.defaultProps = defaultProps

export default Occupied
