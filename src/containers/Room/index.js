import MeshbluHttp from 'browser-meshblu-http'
import Debug from 'debug'
import _ from 'lodash'
import React, { PropTypes } from 'react'

import { MESHBLU_HOSTNAME } from 'config'

import RoomPage from '../../components/RoomPage'
import { getCredentials } from '../../services/credentials-service'
import DeviceFirehose from '../../services/device-firehose'

const debug = Debug('dashboard:containers:room')

const contextTypes = {
  router: PropTypes.object,
}

class RoomContainer extends React.Component {
  state = {
    backgroundImageUrl: '',
    backgroundVideoUrl: '',
    currentMeeting: null,
    currentTime: null,
    error: null,
    name: '',
  }

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const credentials = getCredentials()
    const { uuid, token } = credentials

    if (_.some([ uuid, token ], _.isEmpty)) return this.context.router.push('/setup')

    this.meshblu        = new MeshbluHttp({ ...credentials, hostname: MESHBLU_HOSTNAME })
    this.deviceFirehose = new DeviceFirehose(credentials)

    this.deviceFirehose.connect(this.handleConnectionError)
    this.deviceFirehose.on(`device:${uuid}`, this.onDevice)
    this.meshblu.update(uuid, { online: true }, _.noop)
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
      currentMeeting: genisys.currentMeeting,
      currentTime: genisys.updatedAt,
      name,
      nextMeeting: genisys.nextMeeting,
      actions: genisys.actions,
    })
  }

  render() {
    const {
      backgroundImageUrl,
      backgroundVideoUrl,
      currentMeeting,
      currentTime,
      name,
      nextMeeting,
      actions,
    } = this.state

    return (
      <RoomPage
        backgroundImageUrl={backgroundImageUrl}
        backgroundVideoUrl={backgroundVideoUrl}
        currentMeeting={currentMeeting}
        currentTime={currentTime}
        name={name}
        nextMeeting={nextMeeting}
        loading={!_.isEmpty(actions)}
      />
    )
  }
}

RoomContainer.contextTypes = contextTypes

export default RoomContainer
