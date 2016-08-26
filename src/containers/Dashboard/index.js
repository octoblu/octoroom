import React, { PropTypes } from 'react'
import View from 'react-flexbox'

import CitrixLogo from './citrix-logo-reverse.png'

import styles from './styles.css'

const propTypes = {}
const defaultProps = {}

class Dashboard extends React.Component {
  state = {
    genisys: null,
  }

  constructor(props) {
    super(props)

    this.conn = meshblu.createConnection({
      uuid: 'f9931a75-b621-41c8-b9f7-4136d5feeb46',
      token: '222d2e105722a12187b38290a36d4bfd5421632d',
    })
  }

  componentDidMount() {
    this.conn.on('ready', (data) => {
      this.conn.on('config', ({ genisys }) => {
        this.setState({ genisys })
      })
    })
  }

  render() {
    const { genisys } = this.state
    let children;

    if (genisys) children = <span>{genisys.count}</span>

    return (
      <View column className={styles.Dashboard}>
        <View auto column className={styles.state}>
          <div>Welcome to the FUTURE.</div>
        </View>

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
