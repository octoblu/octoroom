import React, { PropTypes } from 'react'
import View from 'react-flexbox'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
}

const defaultProps = {}

class App extends React.Component {
  render() {
    return (
      <View className={styles.App}>
        {this.props.children}
      </View>
    )
  }
}

App.propTypes    = propTypes
App.defaultProps = defaultProps

export default App
