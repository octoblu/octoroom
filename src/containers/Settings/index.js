import PropTypes from "prop-types"
import React from "react"
import Flexbox from "react-flexbox"
import Page from "zooid-page"
import Heading from "zooid-heading"

import {
  getCredentials,
  setCredentials,
} from "../../services/credentials-service"

import SetupForm from "../../components/SetupForm"

const contextTypes = {
  router: PropTypes.object,
}

class Settings extends React.Component {
  constructor(props) {
    super(props)

    const { uuid, token } = getCredentials()

    this.state = {
      uuid,
      token,
    }
  }

  handleSetup = e => {
    e.preventDefault()

    const uuid = e.target.uuid.value
    const token = e.target.token.value

    this.setState({ uuid, token }, () => {
      setCredentials({ uuid, token })
      this.context.router.push("/")
    })
  }

  render() {
    const { uuid, token } = this.state

    return (
      <Flexbox>
        <Page width="small">
          <Heading level={3}>Setup Room Device</Heading>
          <SetupForm uuid={uuid} token={token} onSetup={this.handleSetup} />
        </Page>
      </Flexbox>
    )
  }
}

Settings.contextTypes = contextTypes

export default Settings
