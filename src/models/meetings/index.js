import _ from 'lodash'
import moment from 'moment'

const getNextMeeting = (meetings) => {
  if(_.isEmpty(meetings)) return null

  const futureMeetings =  _.filter(meetings, ({startTime}) => {
    return moment(startTime).isAfter(moment()) && moment().isSame(startTime, 'day')
  })

  if(_.isEmpty(futureMeetings)) return null

  const sortedMeetings = _.sortBy(futureMeetings, ({startTime}) => moment(startTime))

  return _.first(sortedMeetings)
}

export { getNextMeeting }
