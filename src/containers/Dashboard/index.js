import React, { PropTypes } from 'react'
import View from 'react-flexbox'

import DeviceFirehose from '../../firehoses/device-firehose'
import { getCredentials } from '../../services/credentials-service'
import Welcome from '../../components/Welcome'

import CitrixLogo from './citrix-logo-reverse.png'
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

    console.log('credentials', credentials);

    this.deviceFirehose = new DeviceFirehose(credentials)
    this.deviceFirehose.connect(this.handleError)
  }

  handleError = (error) => {
    if (!error) return
    this.setState({ error })
  }

  componentDidMount() {
    const deviceUUID = 'f9513c4d-4d5f-4e93-b632-472ab1ea0c92'

    this.deviceFirehose.on(`device:${deviceUUID}`, this.onDevice)
    // this.conn.on('ready', (data) => {
    //   this.conn.subscribe({uuid: 'f9513c4d-4d5f-4e93-b632-472ab1ea0c92', type: ['configure.sent']})
    //   this.conn.on('config', ({genisys}) => {
    //     console.log("Configure Event Received: ", {genisys});
    //     this.setState({ genisys })
    //   })
    // })
  }

  onDevice = (device) => {
    console.log('onDevice', device);
  }

  render() {
    const { genisys } = this.state
    let children;

    if (genisys) children = <span>{genisys.count}</span>

    return (
      <View column className={styles.Dashboard}>
        <Welcome />

        <View auto row className={styles.footer}>
          <div>Powered by Citrix Octoblu.</div>
          <img src={CitrixLogo} alt="Citrix" className={styles.citrixLogo}/>
        </View>
      </View>
    )
  }
}

Dashboard.propTypes    = propTypes
Dashboard.defaultProps = defaultProps

export default Dashboard
