import MeshbluHttp from 'browser-meshblu-http'
import Debug from 'debug'
import _ from 'lodash'
import React from 'react'

import { MESHBLU_HOSTNAME } from 'config'

import RoomPage from '../../components/RoomPage'
import { getCredentials } from '../../services/credentials-service'
import DeviceFirehose from '../../services/device-firehose'

const debug = Debug('dashboard:containers:room')

export default class RoomContainer extends React.Component {
  state = {
    backgroundImageUrl: '',
    backgroundVideoUrl: '',
    currentMeeting: null,
    clientUrl: '',
    currentTime: null,
    error: null,
    name: '',
  }

  constructor(props) {
    super(props)

    const credentials = getCredentials()

    this.meshblu        = new MeshbluHttp({ ...credentials, hostname: MESHBLU_HOSTNAME })
    this.deviceFirehose = new DeviceFirehose(credentials)

    this.deviceFirehose.connect(this.handleConnectionError)
  }

  componentDidMount() {
    const deviceUUID = getCredentials().uuid

    this.deviceFirehose.on(`device:${deviceUUID}`, this.onDevice)
    this.meshblu.update(deviceUUID, { online: true }, _.noop)
  }

  handleConnectionError = (error) => {
    if (error) {
      debug('Firehose Connection Error', error)
      this.setState({ error })
      return
    }

    debug('Firehose: Connected')
  }

  onDevice = (device) => {
    const { name, genisys } = device

    debug('GENISYS', genisys);

    this.setState({
      backgroundImageUrl: genisys.backgroundImageUrl,
      backgroundVideoUrl: genisys.backgroundVideoUrl,
      clientUrl: genisys.clientUrl,
      currentMeeting: genisys.currentMeeting,
      currentTime: genisys.updatedAt,
      name,
      nextMeeting: genisys.nextMeeting,
    })
  }

  render() {
    const {
      backgroundImageUrl,
      backgroundVideoUrl,
      clientUrl,
      currentMeeting,
      currentTime,
      name,
      nextMeeting,
    } = this.state

    return (
      <RoomPage
        backgroundImageUrl={backgroundImageUrl}
        backgroundVideoUrl={backgroundVideoUrl}
        clientUrl={clientUrl}
        currentMeeting={currentMeeting}
        currentTime={currentTime}
        name={name}
        nextMeeting={nextMeeting}
      />
    )
  }
}
