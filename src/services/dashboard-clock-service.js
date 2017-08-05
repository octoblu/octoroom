import moment from "moment-timezone"

export function returnDashboardClock(timezone) {
  if (!timezone) return moment().format("h:mm A")
  var tempTimezone = timezone.split(" ")
  var parsedTimezone = tempTimezone[0]

  return moment().tz(parsedTimezone).format("h:mm A")
}
