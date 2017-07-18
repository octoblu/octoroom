import React, { PropTypes } from "react"

import BackgroundVideo from "../../components/BackgroundVideo/"
import DashboardFooter from "../../components/DashboardFooter/"
import DashboardHeader from "../../components/DashboardHeader/"
import StateHeading from "../StateHeading/"
import StateSubHeading from "../StateSubHeading/"
import StateWrapper from "../StateWrapper/"

import styles from "./styles.css"

const propTypes = {
  backgroundImageUrl: PropTypes.string,
  backgroundVideoUrl: PropTypes.string,
  name: PropTypes.string,
}

const UnderConstruction = props => {
  const { backgroundImageUrl, backgroundVideoUrl, name } = props

  return (
    <div className={styles.root}>
      <DashboardHeader name={name} />
      <BackgroundVideo
        imageUrl={backgroundImageUrl}
        videourl={backgroundVideoUrl}
      />
      <div className={styles.construction} />
      <StateWrapper underconstruction>
        <StateHeading>Upgrade In Progress</StateHeading>
        <StateSubHeading>We'll be back in just a moment.</StateSubHeading>
      </StateWrapper>
      <DashboardFooter />
    </div>
  )
}

UnderConstruction.propTypes = propTypes

export default UnderConstruction
