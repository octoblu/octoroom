import MeshbluHttp from "browser-meshblu-http"
import Debug from "debug"
import isEmpty from "lodash/isEmpty"
import noop from "lodash/noop"
import some from "lodash/some"
import PropTypes from "prop-types"
import React from "react"

import { meshbluHttpUrlComponents } from "../../services/urls-service"

import RoomPage from "../../components/RoomPage"
import { getCredentials } from "../../services/credentials-service"
import { returnMeetingIfToday } from "../../services/meetings-service"
import DeviceFirehose from "../../services/device-firehose"

const debug = Debug("dashboard:containers:room")

const contextTypes = {
  router: PropTypes.object,
}

class RoomContainer extends React.Component {
  state = {
    backgroundImageUrl: "",
    backgroundVideoUrl: "",
    connectError: null,
    currentMeeting: null,
    currentTime: null,
    error: null,
    inSkype: false,
    name: "",
    roomId: "",
  }

  componentDidMount() {
    const credentials = getCredentials()
    const { uuid, token } = credentials

    if (some([uuid, token], isEmpty)) return this.context.router.push("/setup")

    this.meshblu = new MeshbluHttp({
      ...credentials,
      ...meshbluHttpUrlComponents,
      serviceName: "octoroom",
    })
    this.deviceFirehose = new DeviceFirehose(credentials)

    this.deviceFirehose.connect(this.onConnect)
    this.deviceFirehose.on(`device:${uuid}`, this.onDevice)
    this.deviceFirehose.on("connecterror", this.onConnectError)

    this.meshblu.update(uuid, { online: true }, noop)
  }

  onConnect = error => {
    if (error) {
      debug("Firehose Connection Error", error)
      this.setState({ error })
      return
    }

    const { uuid } = getCredentials()
    this.deviceFirehose.refresh(uuid, error =>
      this.setState({ error, connectError: null })
    )
    debug("Firehose: Connected")
  }

  onConnectError = error => {
    this.setState({ connectError: error })
  }

  onDevice = device => {
    const { uuid, name, genisys, meshblu } = device

    debug("GENISYS", genisys)

    const nextMeeting = returnMeetingIfToday(genisys.nextMeeting)

    const {
      actions,
      backgroundImageUrl,
      backgroundVideoUrl,
      currentMeeting,
      inSkype,
    } = genisys

    this.setState({
      actions,
      backgroundImageUrl,
      backgroundVideoUrl,
      connectError: null,
      currentMeeting,
      currentTime: meshblu.updatedAt,
      inSkype,
      name,
      nextMeeting,
      roomId: uuid,
    })
  }

  render() {
    const {
      actions,
      backgroundImageUrl,
      backgroundVideoUrl,
      connectError,
      currentMeeting,
      currentTime,
      inSkype,
      name,
      nextMeeting,
      roomId,
    } = this.state

    return (
      <RoomPage
        backgroundImageUrl={backgroundImageUrl}
        backgroundVideoUrl={backgroundVideoUrl}
        connectError={connectError}
        currentMeeting={currentMeeting}
        currentTime={currentTime}
        inSkype={inSkype}
        loading={!isEmpty(actions)}
        name={name}
        nextMeeting={nextMeeting}
        roomId={roomId}
      />
    )
  }
}

RoomContainer.contextTypes = contextTypes

export default RoomContainer
