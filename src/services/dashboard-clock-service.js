import moment from "moment-timezone"

export function returnDashboardClock(timezone) {
  if (!timezone) return null
  var tempTimezone = timezone.split(" ")
  var parsedTimezone = tempTimezone[0]

  return moment().tz(parsedTimezone).format("h:mm A")
}
