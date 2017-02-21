import MeshbluHttp from 'browser-meshblu-http'
import Debug from 'debug'
import _ from 'lodash'
import React, { PropTypes } from 'react'

import { meshbluHttpUrlComponents } from '../../services/urls-service'

import RoomPage from '../../components/RoomPage'
import { getCredentials } from '../../services/credentials-service'
import { returnMeetingIfToday } from '../../services/meetings-service'
import DeviceFirehose from '../../services/device-firehose'

const debug = Debug('dashboard:containers:room')

const contextTypes = {
  router: PropTypes.object,
}

class RoomContainer extends React.Component {
  state = {
    backgroundImageUrl: '',
    backgroundVideoUrl: '',
    connectError: null,
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

    this.meshblu        = new MeshbluHttp({ ...credentials, ...meshbluHttpUrlComponents })
    this.deviceFirehose = new DeviceFirehose(credentials)

    this.deviceFirehose.connect(this.onConnect)
    this.deviceFirehose.on(`device:${uuid}`, this.onDevice)
    this.deviceFirehose.on('connecterror', this.onConnectError)
    this.meshblu.update(uuid, { online: true }, _.noop)
  }

  onConnect = (error) => {
    if (error) {
      debug('Firehose Connection Error', error)
      this.setState({ error })
      return
    }

    const {uuid} = getCredentials()
    this.deviceFirehose.refresh(uuid, (error) => this.setState({ error, connectError: null }))
    debug('Firehose: Connected')
  }

  onConnectError = (error) => {
    this.setState({ connectError: error })
  }

  onDevice = (device) => {
    const { name, genisys, meshblu } = device
    debug('GENISYS', genisys);
    const nextMeeting = returnMeetingIfToday(genisys.nextMeeting)

    this.setState({
      backgroundImageUrl: genisys.backgroundImageUrl,
      backgroundVideoUrl: genisys.backgroundVideoUrl,
      connectError: null,
      currentMeeting: genisys.currentMeeting,
      currentTime: meshblu.updatedAt,
      name,
      nextMeeting,
      actions: genisys.actions,
    })
  }

  render() {
    const {
      backgroundImageUrl,
      backgroundVideoUrl,
      connectError,
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
        connectError={connectError}
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
