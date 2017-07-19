import styled from "emotion/react"
import PropTypes from "prop-types"
import React from "react"
import Flexbox from "react-flexbox"
import request from "superagent"
import nocache from "superagent-no-cache"

const Container = styled(Flexbox)`
  min-height: 100%;
  justify-content: center;
  align-items: center;
`

const propTypes = {
  children: PropTypes.element.isRequired,
}

class App extends React.Component {
  componentDidMount() {
    const versionCheckInterval = 60 * 1000
    var lastVersion = undefined

    setInterval(function() {
      request
        .get(window.location.origin + "/version")
        .use(nocache)
        .end(function(err, res) {
          if (err) return
          var result = JSON.parse(res.text)
          if (!lastVersion) {
            lastVersion = result.version
          } else if (lastVersion != result.version) {
            location.reload(true)
          }
        })
    }, versionCheckInterval)
  }

  render() {
    return <Container>{this.props.children}</Container>
  }
}

App.propTypes = propTypes

export default App
