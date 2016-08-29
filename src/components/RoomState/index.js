import _ from 'lodash'
import React, { PropTypes } from 'react'

import Booked from '../Booked/'
import Empty from '../Empty/'
import Occupied from '../Occupied/'
import SkypeInSession from '../SkypeInSession/'

const propTypes = {
  genisys: PropTypes.object,
}

const defaultProps = {
  genisys: null,
}

const RoomState = ({ genisys }) => {
  if (_.isEmpty(genisys)) return null

  console.log('genisys', genisys)

  const { booked, peopleInRoom, inSkype } = genisys

  if (_.isEmpty(peopleInRoom)) return <Empty />

  return (
    <div>
      {booked ? <Booked /> : null}
      {!_.isEmpty(peopleInRoom) ? <Occupied /> : null}
      {inSkype ? <SkypeInSession /> : null}
    </div>
  )
}

RoomState.propTypes    = propTypes
RoomState.defaultProps = defaultProps

export default RoomState
