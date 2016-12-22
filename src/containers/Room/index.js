import Debug from 'debug'
import _ from 'lodash'
import MeshbluHttp from 'browser-meshblu-http'
import React from 'react'

import { MESHBLU_HOSTNAME } from 'config'

import BackgroundVideo from '../../components/BackgroundVideo/'
import DashboardFooter from '../../components/DashboardFooter/'
import DashboardHeader from '../../components/DashboardHeader/'
import RoomState from '../../components/RoomState/'

import Room from '../../models/room'

import { getCredentials } from '../../services/credentials-service'
import DeviceFirehose from '../../services/device-firehose'

import styles from './styles.css'

const debug = Debug('dashboard:containers:room')

export default class RoomContainer extends React.Component {
  state = {
    backgroundImageUrl: '',
    backgroundVideoUrl: '',
    currentMeeting: null,
    clientUrl: '',
    currentTime: null,
    error: null,
    inSkype: false,
    meetings: null,
    name: '',
    peopleInRoom: [],
  }

  constructor(props) {
    super(props)

    const credentials = getCredentials()

    this.room           = new Room([])
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
    debug('GENISYS', device.genisys);

    const { name, genisys } = device
    const {
      backgroundImageUrl,
      backgroundVideoUrl,
      clientUrl,
      currentMeeting,
      inSkype,
      meetings,
      nextMeeting,
      peopleInRoom,
      updatedAt,
    } = genisys

    this.room.setOccupants(peopleInRoom)

    this.setState({
      backgroundImageUrl,
      backgroundVideoUrl,
      clientUrl,
      currentMeeting,
      currentTime: updatedAt,
      inSkype,
      meetings,
      nextMeeting,
      name,
      peopleInRoom,
    })
  }

  render() {
    if (!this.room) return null

    debug('STATE', this.state);

    const {
      clientUrl,
      currentMeeting,
      currentTime,
      nextMeeting,
      name,
    } = this.state

    const backgroundImageUrl = _.get(this.state, 'backgroundImageUrl', 'https://cdn.octoblu.com/images/iceland.jpg')
    const backgroundVideoUrl = _.get(this.state, 'backgroundVideoUrl')

    return (
      <div className={styles.root}>
        <DashboardHeader name={name} />

        <BackgroundVideo imageUrl={backgroundImageUrl} videourl={backgroundVideoUrl} />

        <RoomState
          clientUrl={clientUrl}
          currentMeeting={currentMeeting}
          nextMeeting={nextMeeting}
        />

        <DashboardFooter currentTime={currentTime} />
      </div>
    )
  }
}
