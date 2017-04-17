import MeshbluHTTP from "browser-meshblu-http"
import _ from "lodash"
import Firehose from "meshblu-firehose-socket.io"
import moment from "moment"
import EventEmitter2 from "eventemitter2"

import {
  meshbluFirehoseSocketIOUrlComponents,
  meshbluHttpUrlComponents,
} from "./urls-service"

export default class DeviceFirehose extends EventEmitter2 {
  constructor({ uuid, token }) {
    super()
    this._lastUpdatedAt = 0
    this._onDeviceHandlers = {}

    this._meshbluConfig = {
      uuid,
      token,
      ...meshbluFirehoseSocketIOUrlComponents(),
    }
    this._firehose = new Firehose({
      meshbluConfig: this._meshbluConfig,
      reconnectionAttempts: 20,
    })
    this.updateDevice = _.debounce(this._updateDevice, 35000)
    this._firehose.on("message", this._onMessage)
    this._firehose.on("reconnecting", this._onConnectError)
    this._firehose.on("reconnect_error", this._onConnectError)
    this._firehose.on("connect_error", this._onConnectError)

    this._meshblu = new MeshbluHTTP({
      uuid,
      token,
      ...meshbluHttpUrlComponents(),
      serviceName: "octoroom",
    })
  }

  connect(callback) {
    this._firehose.on("connect", () => {
      this._meshblu.whoami(error => {
        callback(error)
      })
    })
    this._firehose.connect()
  }

  close(callback) {
    this._firehose.close(callback)
  }

  refresh(targetUUID, callback) {
    if (_.isEmpty(targetUUID)) return callback(new Error("Invalid Device UUID"))
    this._meshblu.update(targetUUID, { refresh: Date.now() }, error =>
      callback(error)
    )
  }

  _isStale(message) {
    const updatedAtStr = _.get(message, "data.meshblu.updatedAt")
    if (_.isEmpty(updatedAtStr)) return true
    const updatedAt = moment.utc(updatedAtStr).valueOf()
    return updatedAt < this._lastUpdatedAt
  }

  _isSpeech(message) {
    const notificationText = _.get(message, "data.notificationText")
    if (!_.isEmpty(notificationText)) return true
    return false
  }

  _onConnectError = error => {
    this.emit("connecterror", error)
  }

  _onMessage = message => {
    this.updateDevice()
    if (this._isStale(message)) {
      if (this._isSpeech(message))
        return this.emit(`notificationSpeech`, this._parseSpeech(message))
      return
    }
    const device = this._parseDevice(message)
    this._updateLastUpdatedAt(message)
    this.emit(`device:${device.uuid}`, device)
    if (!device.online) this._setOnline(device.uuid)
  }

  _setOnline = targetUUID => {
    this._meshblu.update(targetUUID, { online: true }, error => {
      if (error) console.log("set online error: ", error)
    })
  }

  _parseDevice(message) {
    return _.get(message, "data")
  }

  _parseSpeech(message) {
    return _.get(message, "data.notificationText")
  }

  _updateDevice() {
    this._meshblu.whoami((error, device) => {
      this._onMessage({ data: device })
    })
  }

  _updateLastUpdatedAt(message) {
    const updatedAtStr = _.get(message, "data.meshblu.updatedAt")
    this._lastUpdatedAt = moment.utc(updatedAtStr).valueOf()
  }
}
