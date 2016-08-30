import _ from 'lodash'

export default class Room {
  constructor(peopleInRoom) {
    this.peopleInRoom = peopleInRoom
  }

  setOccupants(futurePeopleInRoom) {
    this.peopleInRoom = futurePeopleInRoom
  }

  getLatestOccupants(futurePeopleInRoom) {
    if (_.isEmpty(futurePeopleInRoom)) return []
    if (futurePeopleInRoom.length <= this.peopleInRoom.length) return []

    return _.differenceBy(futurePeopleInRoom, this.peopleInRoom, 'userUuid')
  }
}
