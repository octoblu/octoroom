import _ from 'lodash'
import React, { PropTypes } from 'react'

import BackgroundVideo from '../../components/BackgroundVideo/'
import DashboardFooter from '../../components/DashboardFooter/'
import DashboardHeader from '../../components/DashboardHeader/'
import RoomState from '../../components/RoomState/'

import styles from './styles.css'

const propTypes = {
  backgroundImageUrl: PropTypes.string,
  backgroundVideoUrl: PropTypes.string,
  clientUrl: PropTypes.string,
  currentMeeting: PropTypes.object,
  currentTime: PropTypes.string,
  nextMeeting: PropTypes.object,
  name: PropTypes.string,
}

const defaultProps = {}

const RoomPage = (props) => {
  const {
    backgroundImageUrl,
    backgroundVideoUrl,
    clientUrl,
    currentMeeting,
    currentTime,
    nextMeeting,
    name,
  } = props

  if (_.isEmpty(currentTime)) return null

  return (
    <div className={styles.root}>
      <DashboardHeader name={name} />

      <BackgroundVideo imageUrl={backgroundImageUrl} videourl={backgroundVideoUrl} />

      <RoomState
        clientUrl={clientUrl}
        currentMeeting={currentMeeting}
        nextMeeting={nextMeeting}
      />

      <DashboardFooter currentTime={currentTime} />
    </div>
  )
}

RoomPage.propTypes    = propTypes
RoomPage.defaultProps = defaultProps

export default RoomPage
