import MeshbluHttp from 'browser-meshblu-http'
import _ from 'lodash'
import React from 'react'
import Flexbox from 'react-flexbox'

import BackgroundVideo from '../../components/BackgroundVideo/'
import BookingQRCode from '../../components/BookingQRCode/'
import RoomInfo from '../../components/RoomInfo/'
import RoomState from '../../components/RoomState/'

import DeviceFirehose from '../../services/device-firehose'
import { getCredentials } from '../../services/credentials-service'

import Room from '../../models/room'

import styles from './styles.css'

export default class RoomContainer extends React.Component {
  constructor(props) {
    super(props)

    const credentials = getCredentials()

    this.room           = new Room([])
    this.meshblu        = new MeshbluHttp(credentials)
    this.deviceFirehose = new DeviceFirehose(credentials)
    this.deviceFirehose.connect(this.handleConnectionError)

    this.state = {
      booked: false,
      clientUrl: '',
      error: null,
      inSkype: false,
      location: '',
      meetings: null,
      name: '',
      peopleInRoom: [],
      speechText: '',
    }

    this.speechText = ''
  }

  handleConnectionError = (error) => {
    if (error) {
      console.error('Firehose Connection Error', error)
      this.setState({ error })
      return
    }

    console.log('Firehose: Connected')
  }

  componentDidMount() {
    const deviceUUID = getCredentials().uuid

    this.meshblu.update(deviceUUID, { online: true }, _.noop)
    this.deviceFirehose.on(`device:${deviceUUID}`, this.onDevice)
  }

  onDevice = (device) => {
    console.log('GENISYS', device.genisys);

    const { name, genisys } = device
    const { booked, inSkype, meetings, options, peopleInRoom } = genisys
    const { backgroundImageUrl, backgroundVideoUrl,clientUrl, location } = options
    const speechText = this.getSpeechText(this.room.getLatestOccupants(peopleInRoom))

    this.room.setOccupants(peopleInRoom)

    this.setState({
      backgroundImageUrl,
      backgroundVideoUrl,
      booked,
      clientUrl,
      inSkype,
      location,
      meetings,
      name,
      peopleInRoom,
      speechText,
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
      booked,
      clientUrl,
      location,
      meetings,
      name,
      peopleInRoom,
      speechText,
    } = this.state

    const backgroundImageUrl = _.get(this.state, 'backgroundImageUrl', 'https://cdn.octoblu.com/images/iceland.jpg')
    const backgroundVideoUrl = _.get(this.state, 'backgroundVideoUrl')

    return (
      <div className={styles.root}>
        <BackgroundVideo imageUrl={backgroundImageUrl} videoUrl={backgroundVideoUrl} />
        <Flexbox auto className={styles.header}>
          <img
            src="//d2zw6j512x6z0x.cloudfront.net/master/d48dc0bf063ecc1477d1163831ee8ff17efbbfae/assets/images/octoblu_logo.png"
            alt="Octoblu"
            className={styles.octobluLogo}
          />

          <div>
            Join the Room <strong>{clientUrl}</strong>
          </div>
        </Flexbox>

        <RoomState
          booked={booked}
          meetings={meetings}
          peopleInRoom={peopleInRoom}
          roomName={name}
          speechText={speechText}
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
