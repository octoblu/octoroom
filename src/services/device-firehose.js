import MeshbluHTTP from 'browser-meshblu-http'
import _ from 'lodash'
import Firehose from 'meshblu-firehose-socket.io'
import moment from 'moment'
import EventEmitter2 from 'eventemitter2'

import { FIREHOSE_CONFIG, MESHBLU_HOSTNAME } from 'config'

export default class DeviceFirehose extends EventEmitter2 {
  constructor({ uuid, token }) {
    super()
    this._lastUpdatedAt = 0
    this._onDeviceHandlers = {}

    this._meshbluConfig = _.assign({ uuid, token }, FIREHOSE_CONFIG)
    this._firehose = new Firehose({ meshbluConfig: this._meshbluConfig })
    this._firehose.on('message', this._onMessage)

    this._meshblu = new MeshbluHTTP({ uuid, token, hostname: MESHBLU_HOSTNAME })
  }

  connect(callback) {
    this._firehose.connect((error) => {
      if (error) return callback(error)
      this._meshblu.whoami((error, me) => {
        callback(error)
      })
    })
  }

  close(callback){
    this._firehose.close(callback)
  }

  refresh(targetUUID, callback) {
    if (_.isEmpty(targetUUID)) return callback(new Error('Invalid Device UUID'))
    this._meshblu.update(targetUUID, {refresh: Date.now()}, (error) => callback(error))
  }

  _isStale(message) {
    const updatedAtStr = _.get(message, 'data.meshblu.updatedAt')
    if (_.isEmpty(updatedAtStr)) return true
    const updatedAt = moment.utc(updatedAtStr).valueOf()
    return (updatedAt < this._lastUpdatedAt)
  }

  _isSpeech(message) {
    const notificationText = _.get(message, 'data.notificationText')
    if (!_.isEmpty(notificationText)) return true
    return false
  }

  _onMessage = (message) => {        
    if (this._isStale(message)) {
      if (this._isSpeech(message)) return this.emit(`notificationSpeech`, this._parseSpeech(message))
      return
    }
    const device = this._parseDevice(message)
    this._updateLastUpdatedAt(message)
    this.emit(`device:${device.uuid}`, device)
  }

  _parseDevice(message) {
    return _.get(message, 'data')
  }

  _parseSpeech(message) {
    return _.get(message, 'data.notificationText')
  }

  _updateLastUpdatedAt(message) {
    const updatedAtStr  = _.get(message, 'data.meshblu.updatedAt')
    this._lastUpdatedAt = moment.utc(updatedAtStr).valueOf()
  }
}
