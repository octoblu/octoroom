import React, { PropTypes } from 'react'

const propTypes = {
  text: PropTypes.string,
  autoPlay: PropTypes.bool,
}

const defaultProps = {
  text: '',
  autoPlay: false,
}

class Spit extends React.Component {
  constructor(props) {
    super(props)

    this.utterance = new window.SpeechSynthesisUtterance()
    this.utterance.text = this.props.text
  }

  componentWillUpdate(nextProps) {
    this.utterance.text = nextProps.text
  }

  speak() {
    window.speechSynthesis.speak(this.utterance)
  }

  render() {
    if (this.props.autoPlay) this.speak()
    
    return null
  }
}

Spit.propTypes    = propTypes
Spit.defaultProps = defaultProps

export default Spit
