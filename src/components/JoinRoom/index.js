import React, { PropTypes } from 'react'
import QRCode from 'rc-qrcode'
import styles from './styles.css'

const propTypes = {
  clientUrl: PropTypes.string,
}

const defaultProps = {}

const JoinRoom = ({ clientUrl }) => {
  return (
    <div className={styles.root}>
      <div className={styles.joinText}>
        <div>Join the Room</div>
        <div><a href={clientUrl}>{clientUrl}</a></div>
      </div>

      <QRCode
        renderer="auto"
        content={clientUrl}
        scale="5"
        margin="10"
        background="white"
        foreground="black"
      />
    </div>
  )
}

JoinRoom.propTypes    = propTypes
JoinRoom.defaultProps = defaultProps

export default JoinRoom
