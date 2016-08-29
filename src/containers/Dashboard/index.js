import _ from 'lodash'
import React, { PropTypes } from 'react'
import View from 'react-flexbox'
import MeshbluHttp from 'browser-meshblu-http'

import RoomState from '../../components/RoomState/'
import DeviceFirehose from '../../firehoses/device-firehose'
import { getCredentials } from '../../services/credentials-service'

import styles from './styles.css'

const propTypes = {}
const defaultProps = {}

class Dashboard extends React.Component {
  state = {
    error: null,
    genisys: null,
  }

  constructor(props) {
    super(props)

    const credentials = getCredentials()

    this.meshblu = new MeshbluHttp(credentials)

    this.deviceFirehose = new DeviceFirehose(credentials)
    this.deviceFirehose.connect(this.handleConnectionError)
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
    const { genisys } = device

    this.setState({ genisys })
  }

  render() {
    return (
      <View column className={styles.Dashboard}>
        <RoomState genisys={this.state.genisys}/>

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
