import join from "lodash/join"
import split from "lodash/split"
import tail from "lodash/tail"
import url from "url"

export function meshbluFirehoseSocketIOUrlComponents() {
  const { hostname } = getUrlParts()

  return { resolveSrv: true, domain: removeSubdomain(hostname) }
}

export function meshbluHttpUrlComponents() {
  const { hostname } = getUrlParts()

  return { resolveSrv: true, domain: removeSubdomain(hostname) }
}

function getUrlParts() {
  const { hostname, port, protocol } = url.parse(window.location.href)
  if (hostname === "localhost") {
    return {
      hostname: "meeting-room.dev.octo.space",
      port: 80,
      protocol: "http",
    }
  }
  return { hostname, port, protocol }
}

function removeSubdomain(hostname) {
  const parts = split(hostname, ".")
  const partsWithoutSubdomain = tail(parts)

  return join(partsWithoutSubdomain, ".")
}
