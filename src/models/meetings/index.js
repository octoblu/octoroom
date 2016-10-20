import _ from 'lodash'
import moment from 'moment'

const getNextMeeting = (meetings) => {
  const futureMeetings =  _.filter(meetings, ({startTime, ended}) => {
    const now = moment()

    if (ended) return false
    if (moment(startTime).isBefore(now)) return false
    if (!now.isSame(startTime, 'day')) return false
    return true
  })

  const sortedMeetings = _.sortBy(futureMeetings, 'startTime')

  if(_.isEmpty(sortedMeetings)) return null
  return _.first(sortedMeetings)
}

export { getNextMeeting }
