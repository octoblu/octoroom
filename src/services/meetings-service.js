import moment from "moment"

export function returnMeetingIfToday(meeting) {
  if (!meeting) return null

  const startTime = meeting.startTime
  const endOfDay = moment().endOf("day")

  if (moment(startTime).isAfter(endOfDay)) return null
  return meeting
}
