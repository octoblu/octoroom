import MeshbluHTTP from "browser-meshblu-http"
import debounce from "lodash/debounce"
import get from "lodash/get"
import isEmpty from "lodash/isEmpty"
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
    this.updateDevice = debounce(this._updateDevice, 35000)
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
    if (isEmpty(targetUUID)) return callback(new Error("Invalid Device UUID"))
    this._meshblu.update(targetUUID, { refresh: Date.now() }, error =>
      callback(error)
    )
  }

  _isStale(message) {
    const updatedAtStr = get(message, "data.meshblu.updatedAt")
    if (isEmpty(updatedAtStr)) return true
    const updatedAt = moment.utc(updatedAtStr).valueOf()
    return updatedAt < this._lastUpdatedAt
  }

  _isSpeech(message) {
    const notificationText = get(message, "data.notificationText")
    if (!isEmpty(notificationText)) return true
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
    return get(message, "data")
  }

  _parseSpeech(message) {
    return get(message, "data.notificationText")
  }

  _updateDevice() {
    this._meshblu.whoami((error, device) => {
      this._onMessage({ data: device })
    })
  }

  _updateLastUpdatedAt(message) {
    const updatedAtStr = get(message, "data.meshblu.updatedAt")
    this._lastUpdatedAt = moment.utc(updatedAtStr).valueOf()
  }
}
