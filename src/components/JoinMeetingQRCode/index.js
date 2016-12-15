import React, { PropTypes } from 'react'
import QRCode from 'rc-qrcode'
import styles from './styles.css'

const propTypes = {
  meetingUrl: PropTypes.string,
}

const defaultProps = {}

const JoinMeetingQRCode = ({ meetingUrl }) => {
  return (
    <div className={styles.root}>
      <QRCode
        renderer="auto"
        content={meetingUrl}
        scale="5"
        margin="10"
        background="white"
        foreground="black"
      />
    </div>
  )
}

JoinMeetingQRCode.propTypes    = propTypes
JoinMeetingQRCode.defaultProps = defaultProps

export default JoinMeetingQRCode
