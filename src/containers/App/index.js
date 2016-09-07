import React, { PropTypes } from 'react'
import Flexbox from 'react-flexbox'

import styles from './styles.css'

const propTypes = {
  children: PropTypes.element.isRequired,
}

const defaultProps = {}

class App extends React.Component {
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
