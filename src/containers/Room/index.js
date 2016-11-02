import debug from 'debug'
import _ from 'lodash'
import Flexbox from 'react-flexbox'
import MeshbluHttp from 'browser-meshblu-http'
import React from 'react'

import BackgroundVideo from '../../components/BackgroundVideo/'
import BookingQRCode from '../../components/BookingQRCode/'
import RoomInfo from '../../components/RoomInfo/'
import RoomState from '../../components/RoomState/'

import { getCredentials } from '../../services/credentials-service'
import DeviceFirehose from '../../services/device-firehose'

import Room from '../../models/room'

import styles from './styles.css'

const log = debug('container:room')

export default class RoomContainer extends React.Component {
  constructor(props) {
    super(props)

    const credentials = getCredentials()

    this.room           = new Room([])
    this.meshblu        = new MeshbluHttp(credentials)
    this.deviceFirehose = new DeviceFirehose(credentials)
    this.deviceFirehose.connect(this.handleConnectionError)

    this.state = {
      currentMeeting: null,
      clientUrl: '',
      error: null,
      inSkype: false,
      location: '',
      meetings: null,
      name: '',
      peopleInRoom: [],
      speechText: '',
      notificationText: '',
    }

    this.speechText = ''
    this.notificationText = ''

  }

  handleConnectionError = (error) => {
    if (error) {
      log('Firehose Connection Error', error)
      this.setState({ error })
      return
    }

    log('Firehose: Connected')
  }

  componentDidMount() {
    const deviceUUID = getCredentials().uuid

    this.meshblu.update(deviceUUID, { online: true }, _.noop)
    this.deviceFirehose.on(`device:${deviceUUID}`, this.onDevice)
  }

  onDevice = (device) => {
    log('GENISYS', device.genisys);

    const { name, genisys } = device
    const { currentMeeting, inSkype, meetings, options, peopleInRoom, notificationText } = genisys
    const { backgroundImageUrl, backgroundVideoUrl,clientUrl, location } = options
    const speechText = this.getSpeechText(this.room.getLatestOccupants(peopleInRoom))

    this.room.setOccupants(peopleInRoom)

    this.setState({
      backgroundImageUrl,
      backgroundVideoUrl,
      clientUrl,
      currentMeeting,
      inSkype,
      location,
      meetings,
      name,
      peopleInRoom,
      speechText,
      notificationText,
    })
  }

  getSpeechText(latestOccupants) {
    if (_.isEmpty(latestOccupants)) return ''
    if (latestOccupants.length === 1) return `Welcome ${latestOccupants[0].name || 'Guest'}`

    return 'Welcome Guests!'
  }

  render() {
    if (!this.room) return null

    const {
      clientUrl,
      currentMeeting,
      location,
      meetings,
      name,
      speechText,
      notificationText,
    } = this.state

    const backgroundImageUrl = _.get(this.state, 'backgroundImageUrl', 'https://cdn.octoblu.com/images/iceland.jpg')
    const backgroundVideoUrl = _.get(this.state, 'backgroundVideoUrl')

    return (
      <div className={styles.root}>
        <BackgroundVideo imageUrl={backgroundImageUrl} videoUrl={backgroundVideoUrl} />
        <Flexbox auto className={styles.header}>
          <span>
            <img
              src="//cdn.octoblu.com/images/citrix-logo-reverse.png"
              alt="Citrix"
              className={styles.citrixLogo}
            />
            <img
              src="//d2zw6j512x6z0x.cloudfront.net/master/d48dc0bf063ecc1477d1163831ee8ff17efbbfae/assets/images/octoblu_logo.png"
              alt="Octoblu"
              className={styles.octobluLogo}
            />
          </span>

          <div>
            Join the Room <strong>{clientUrl}</strong>
          </div>
        </Flexbox>

        <RoomState
          currentMeeting={currentMeeting}
          meetings={meetings}
          speechText={speechText}
          notificationText={notificationText}
        />

        <BookingQRCode clientUrl={clientUrl}/>

        <div className={styles.footer}>
          <RoomInfo
            clientUrl={clientUrl}
            location={location}
            name={name}
          />
        </div>
      </div>
    )
  }
}
