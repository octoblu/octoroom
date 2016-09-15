import _ from 'lodash'
import moment from 'moment'

const getCurrentMeeting = (meetings) => {
  const ongoingMeetings =  _.filter(meetings, ({startTime, endTime}) => {
    const now = moment()

    if(moment(startTime).isAfter(now)) return false
    if(moment(endTime).isBefore(now)) return false
    return true
  })

  const sortedMeetings = _.sortBy(ongoingMeetings, 'startTime')

  if(_.isEmpty(sortedMeetings)) return null
  return _.first(sortedMeetings)
}

const getNextMeeting = (meetings) => {
  const futureMeetings =  _.filter(meetings, ({startTime}) => {
    const now = moment()

    if (moment(startTime).isBefore(now)) return false
    if (!now.isSame(startTime, 'day')) return false
    return true
  })

  const sortedMeetings = _.sortBy(futureMeetings, 'startTime')

  if(_.isEmpty(sortedMeetings)) return null
  return _.first(sortedMeetings)
}

export { getCurrentMeeting, getNextMeeting }
