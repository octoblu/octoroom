import _ from 'lodash'
import MeshbluHTTP from 'browser-meshblu-http'
import { meshbluHttpUrlComponents } from './urls-service'

const DEFAULT_CREDENTIALS = {
  uuid: '',
  token: '',
}

function safeParse(str) {
  try {
    return JSON.parse(str)
  } catch (error) {
    return undefined
  }
}

export function getCredentials() {
  const credentials = safeParse(window.localStorage.getItem('credentials'))
  if (!_.isEmpty(credentials)) return credentials

  return _.cloneDeep(DEFAULT_CREDENTIALS)
}

export function setCredentials(credentials) {
  window.localStorage.setItem('credentials', JSON.stringify(credentials))
}

export function verifyCredentials({ uuid, token }, callback) {
  if (_.isEmpty(uuid) || _.isEmpty(token)) return callback(new Error('Missing uuid or token'))
  const meshblu = new MeshbluHTTP({ uuid, token, ...meshbluHttpUrlComponents })
  meshblu.whoami((error) => {
    if (error && error.message === 'Forbidden') return callback(new Error('Invalid uuid or token'))
    callback(error)
  })
}
