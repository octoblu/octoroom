import debug from 'debug'
import _ from 'lodash'
import moment from 'moment'
const log = debug('models:meetings')

const getNextMeeting = (meetings) => {
  const futureMeetings =  _.filter(meetings, ({subject, startTime, ended}) => {
    const now = moment()

    if (ended) {
      log(subject, 'not a future meeting cause it ended')
      return false
    }
    if (moment(startTime).isBefore(now)) {
      log(subject, 'not a future meeting cause it started in the past')
      return false
    }
    if (!now.isSame(startTime, 'day')) {
      log(subject, 'not a future meeting cause it aint in today')
      return false
    }
    return true
  })

  const sortedMeetings = _.sortBy(futureMeetings, 'startTime')

  if(_.isEmpty(sortedMeetings)) return null
  return _.first(sortedMeetings)
}

export { getNextMeeting }
