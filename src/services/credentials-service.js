import cloneDeep from "lodash/cloneDeep"
import isEmpty from "lodash/isEmpty"
import MeshbluHTTP from "browser-meshblu-http"
import { meshbluHttpUrlComponents } from "./urls-service"

const DEFAULT_CREDENTIALS = {
  uuid: "",
  token: "",
}

function safeParse(str) {
  try {
    return JSON.parse(str)
  } catch (error) {
    return undefined
  }
}

export function getCredentials() {
  const credentials = safeParse(window.localStorage.getItem("credentials"))
  if (!isEmpty(credentials)) return credentials

  return cloneDeep(DEFAULT_CREDENTIALS)
}

export function setCredentials(credentials) {
  window.localStorage.setItem("credentials", JSON.stringify(credentials))
}

export function verifyCredentials({ uuid, token }, callback) {
  if (isEmpty(uuid) || isEmpty(token))
    return callback(new Error("Missing uuid or token"))
  const meshblu = new MeshbluHTTP({
    uuid,
    token,
    ...meshbluHttpUrlComponents,
    serviceName: "octroom",
  })
  meshblu.whoami(error => {
    if (error && error.message === "Forbidden")
      return callback(new Error("Invalid uuid or token"))
    callback(error)
  })
}
