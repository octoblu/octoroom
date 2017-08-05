import moment from "moment-timezone"

export function returnParsedTimezone(timezone) {
  if (!timezone) return null
  var tempTimezone = timezone.split(" ")
  var parsedTimezone = tempTimezone[0]

  return parsedTimezone
}

export function returnLocalTime(timezone, timestamp) {
  if (!timezone) return null

  let parsedTimezone = returnParsedTimezone(timezone)
  let result = moment.tz(parsedTimezone, timestamp)
  return result
}
