import styled from "emotion/react"
import PropTypes from "prop-types"
import React from "react"

import Construction from "./Construction"
import BackgroundVideo from "../../components/BackgroundVideo/"
import DashboardFooter from "../../components/DashboardFooter/"
import DashboardHeader from "../../components/DashboardHeader/"
import StateHeading from "../StateHeading/"
import StateSubHeading from "../StateSubHeading/"
import StateWrapper from "../StateWrapper/"

const Container = styled("div")`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  flex-wrap: wrap;
  flex: 1;
  color: #FFF;
  text-shadow: 0.05vw 0.05vw 0.1vw rgba(0,0,0,0.8);
  text-shadow: 0.05vmax 0.05vmax 0.1vmax rgba(0,0,0,0.8);

  background: no-repeat center center fixed;
  background-color: rgba(0,0,0,0.75);
  transition: background-image 1000ms ease-in 500ms;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  overflow: hidden;
`

const propTypes = {
  backgroundImageUrl: PropTypes.string,
  backgroundVideoUrl: PropTypes.string,
  name: PropTypes.string,
}

const UnderConstruction = props => {
  const { backgroundImageUrl, backgroundVideoUrl, name } = props

  return (
    <Container>
      <DashboardHeader name={name} />

      <BackgroundVideo
        imageUrl={backgroundImageUrl}
        videourl={backgroundVideoUrl}
      />

      <Construction />

      <StateWrapper underconstruction>
        <StateHeading>Upgrade In Progress</StateHeading>
        <StateSubHeading>We'll be back in just a moment.</StateSubHeading>
      </StateWrapper>

      <DashboardFooter />
    </Container>
  )
}

UnderConstruction.propTypes = propTypes

export default UnderConstruction
