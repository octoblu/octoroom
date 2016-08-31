import MeshbluHttp from 'browser-meshblu-http'
import _ from 'lodash'
import React, { PropTypes } from 'react'
import Flexbox from 'react-flexbox'
import Speech from 'react-speech'
import Heading from 'zooid-heading'

import RoomState from '../../components/RoomState/'
import QRCode from '../../components/QrCode/'
import DeviceFirehose from '../../firehoses/device-firehose'
import { getCredentials } from '../../services/credentials-service'
import Room from '../../models/room'
import styles from './styles.css'

const propTypes = {}
const defaultProps = {}

class Dashboard extends React.Component {
  state = {
    error: null,
    booked: false,
    inSkype: false,
    peopleInRoom: [],
    speechText: '',
    clientUrl: '',
  }

  constructor(props) {
    super(props)

    const credentials = getCredentials()

    this.room = new Room([])
    this.meshblu = new MeshbluHttp(credentials)

    this.deviceFirehose = new DeviceFirehose(credentials)
    this.deviceFirehose.connect(this.handleConnectionError)

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
    const { booked, inSkype, peopleInRoom, clientUrl } = device.genisys
    // const { setOccupants, getLatestOccupants } = this.room
//
    const speechText = this.getSpeechText(this.room.getLatestOccupants(peopleInRoom))
    this.room.setOccupants(peopleInRoom)

    this.setState({
      clientUrl,
      booked,
      inSkype,
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

    const { booked, inSkype, peopleInRoom, speechText, clientUrl } = this.state

    return (
      <Flexbox column className={styles.Dashboard}>
        <Flexbox auto className={styles.header}>
          <img
            src="//d2zw6j512x6z0x.cloudfront.net/master/d48dc0bf063ecc1477d1163831ee8ff17efbbfae/assets/images/octoblu_logo.png"
            alt="Octoblu"
            className={styles.octobluLogo}
          />

        <div className={styles.headerText}>Citrix Smart Conference Room</div>
      </Flexbox>

        <RoomState
          booked={booked}
          inSkype={inSkype}
          peopleInRoom={peopleInRoom}
          speechText={speechText}
        />

        <QRCode url={clientUrl}/>
      </Flexbox>
    )
  }
}

Dashboard.propTypes    = propTypes
Dashboard.defaultProps = defaultProps

export default Dashboard
