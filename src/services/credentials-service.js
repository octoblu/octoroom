import _ from 'lodash'

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
