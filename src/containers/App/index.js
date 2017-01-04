import React, { PropTypes } from 'react'
import Flexbox from 'react-flexbox'
import request from 'superagent'
import nocache from 'superagent-no-cache'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
}

const defaultProps = {}

class App extends React.Component {

  componentDidMount() {

    const versionCheckInterval = 60*1000
    var lastVersion = undefined

    setInterval(function() {
      request
        .get(window.location.origin + '/version')
        .use(nocache)
        .end(function(err, res){
          if (err) return
          var result = JSON.parse(res.text)
          if (!lastVersion) {
            lastVersion = result.version
          } else if (lastVersion != result.version) {
            console.log('version change, reloading!')
            location.reload()
          }
        });
    }, versionCheckInterval)
  }

  render() {
    return (
      <Flexbox className={styles.root}>
        {this.props.children}
      </Flexbox>
    )
  }
}

App.propTypes    = propTypes
App.defaultProps = defaultProps

export default App
