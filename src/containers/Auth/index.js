import React from "react"
import { browserHistory } from "react-router"
import _ from "lodash"

import AuthPage from "../../components/AuthPage/"
import {
  setCredentials,
  verifyCredentials,
} from "../../services/credentials-service"

const propTypes = {}
const defaultProps = {}

class Auth extends React.Component {
  state = {
    error: null,
  }

  componentDidMount() {
    const { uuid, token } = _.get(this.props, "location.query")
    verifyCredentials({ uuid, token }, error => {
      if (error) return this.setState({ error })

      setCredentials({ uuid, token })
      browserHistory.replace("/")
    })
  }

  render() {
    const { error } = this.state

    return <AuthPage error={error} />
  }
}

Auth.propTypes = propTypes
Auth.defaultProps = defaultProps

export default Auth
