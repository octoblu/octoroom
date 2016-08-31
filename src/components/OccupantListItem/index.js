import React, { PropTypes } from 'react'
import Flexbox from 'react-flexbox'

import RandomBot from '../RandomBot/'

import styles from './styles.css'

const propTypes = {
  index: PropTypes.number,
  occupant: PropTypes.shape({
    userUuid: PropTypes.string,
    name: PropTypes.string,
  }),
}

const OccupantListItem = ({ index, occupant }) => {
  const botSerialNumber = (index % 9) + 1

  return (
    <Flexbox column className={styles.root}>
      <RandomBot className={styles.bot} serial={botSerialNumber} />
      <div className={styles.name}>{occupant.name || 'Guest'} </div>
    </Flexbox>
  )
}

OccupantListItem.propTypes    = propTypes

export default OccupantListItem
