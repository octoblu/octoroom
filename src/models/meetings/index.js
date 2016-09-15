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
  if(_.isEmpty(meetings)) return null

  const futureMeetings =  _.filter(meetings, ({startTime}) => {
    return moment(startTime).isAfter(moment()) && moment().isSame(startTime, 'day')
  })

  if(_.isEmpty(futureMeetings)) return null

  const sortedMeetings = _.sortBy(futureMeetings, ({startTime}) => moment(startTime))

  return _.first(sortedMeetings)
}

export { getCurrentMeeting, getNextMeeting }
