import React from 'react'

export default class Home extends React.Component {

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
      console.log('UUID AUTHENTICATED!', data);
      this.conn.on('config', ({ genisys }) => {
        this.setState({ genisys })
      })
    })
  }

  render() {
    if (!this.state.genisys) return null

    return <h1>{this.state.genisys.count}</h1>
  }
}
