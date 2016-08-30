import MeshbluHttp from 'browser-meshblu-http'
import _ from 'lodash'
import React, { PropTypes } from 'react'
import View from 'react-flexbox'
import Speech from 'react-speech'

import RoomState from '../../components/RoomState/'
import DeviceFirehose from '../../firehoses/device-firehose'
import { getCredentials } from '../../services/credentials-service'
import Room from '../../models/room'
import QrCode from '../../components/QrCode'

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
    const { booked, inSkype, peopleInRoom } = device.genisys
    // const { setOccupants, getLatestOccupants } = this.room
//
    const speechText = this.getSpeechText(this.room.getLatestOccupants(peopleInRoom))
    this.room.setOccupants(peopleInRoom)

    this.setState({
      peopleInRoom,
      booked,
      inSkype,
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
    const { booked, inSkype, peopleInRoom, speechText } = this.state

    return (
      <View column className={styles.Dashboard}>
        <RoomState
          booked={booked}
          inSkype={inSkype}
          peopleInRoom={peopleInRoom}
          speechText={speechText}
        />
        <QrCode />

        <View auto row className={styles.footer}>
          <div>Powered by Citrix Octoblu.</div>
          <img src="" alt="Citrix" className={styles.citrixLogo}/>
        </View>
      </View>
    )
  }
}

Dashboard.propTypes    = propTypes
Dashboard.defaultProps = defaultProps

export default Dashboard
