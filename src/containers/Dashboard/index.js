import MeshbluHttp from 'browser-meshblu-http'
import _ from 'lodash'
import React from 'react'
import Flexbox from 'react-flexbox'

import JoinRoom from '../../components/JoinRoom/'
import RoomInfo from '../../components/RoomInfo/'
import RoomState from '../../components/RoomState/'
import SkypeInSession from '../../components/SkypeInSession/'

import DeviceFirehose from '../../services/device-firehose'
import { getCredentials } from '../../services/credentials-service'

import Room from '../../models/room'

import styles from './styles.css'

class Dashboard extends React.Component {
  constructor(props) {
    super(props)

    const credentials = getCredentials()

    this.room = new Room([])
    this.meshblu = new MeshbluHttp(credentials)

    this.deviceFirehose = new DeviceFirehose(credentials)
    this.deviceFirehose.connect(this.handleConnectionError)

    this.state = {
      booked: false,
      clientUrl: '',
      error: null,
      inSkype: false,
      meetings: null,
      name: '',
      peopleInRoom: [],
      speechText: '',
    }

    this.speechText = ''
  }

  handleConnectionError = (error) => {
    if (!error) return
    this.setState({ error })
  }

  componentDidMount() {
    const deviceUUID = getCredentials().uuid

    this.meshblu.update(deviceUUID, { online: true }, _.noop)
    this.deviceFirehose.on(`device:${deviceUUID}`, this.onDevice)
  }

  onDevice = (device) => {
    console.log('GENISYS', device.genisys);

    const { name, genisys } = device
    const { booked, inSkype, meetings, peopleInRoom, clientUrl } = genisys
    const speechText = this.getSpeechText(this.room.getLatestOccupants(peopleInRoom))

    this.room.setOccupants(peopleInRoom)

    this.setState({
      booked,
      clientUrl,
      inSkype,
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
      inSkype,
      meetings,
      name,
      peopleInRoom,
      speechText,
    } = this.state

    return (
      <Flexbox column className={styles.Dashboard}>
        <Flexbox auto className={styles.header}>
          <Flexbox auto row>
            <img
              src="//d2zw6j512x6z0x.cloudfront.net/master/d48dc0bf063ecc1477d1163831ee8ff17efbbfae/assets/images/octoblu_logo.png"
              alt="Octoblu"
              className={styles.octobluLogo}
            />

            <div className={styles.headerText}>Citrix Smart Conference Room</div>
          </Flexbox>

          <div>
            Join the Room <a href={clientUrl}>{clientUrl}</a>
          </div>
        </Flexbox>

        <RoomState
          booked={booked}
          peopleInRoom={peopleInRoom}
          speechText={speechText}
          meetings={meetings}
        />

        <JoinRoom clientUrl={clientUrl}/>

        <div className={styles.footer}>
          <SkypeInSession inSession={inSkype} />
          <RoomInfo name={name} clientUrl={clientUrl} />
        </div>
      </Flexbox>
    )
  }
}

export default Dashboard
