import get from "lodash/get"
import React from "react"
import { browserHistory } from "react-router"

import AuthPage from "../../components/AuthPage/"
import {
  setCredentials,
  verifyCredentials,
} from "../../services/credentials-service"

class Auth extends React.Component {
  state = {
    error: null,
  }

  componentDidMount() {
    const { uuid, token } = get(this.props, "location.query")
    verifyCredentials({ uuid, token }, error => {
      if (error) return this.setState({ error })

      setCredentials({ uuid, token })
      browserHistory.replace("/")
    })
  }

  render() {
    return <AuthPage error={this.state.error} />
  }
}

export default Auth
