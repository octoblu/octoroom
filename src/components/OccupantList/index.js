import _ from 'lodash'
import React, { PropTypes } from 'react'
import Flexbox from 'react-flexbox'

import OccupantListItem from '../OccupantListItem/'

import styles from './styles.css'

const propTypes = {
  occupants: PropTypes.array,
}

const defaultProps = {
  occupants: [],
}

const OccupantList = ({ occupants }) => {
  const people = _.map(occupants, (occupant) => <div>{occupant.name || 'Guest'}</div>)

  return <Flexbox column className={styles.root}>{people}</Flexbox>
}

OccupantList.propTypes    = propTypes
OccupantList.defaultProps = defaultProps

export default OccupantList
