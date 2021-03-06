import styled from "emotion/react"
import PropTypes from "prop-types"
import React from "react"

const Container = styled("div")`
  align-items: baseline;
  display: flex;
  flex-direction: row;
  font-size: 1.65vmax;
  font-size: 1.65vw;
  justify-content: flex-start;
  padding: 0.83vmax 2.6vmax;
  padding: 0.83vw 2.6vw;
  width: 100%;
`

const propTypes = {
  currentTime: PropTypes.string,
  dashboardClock: PropTypes.string,
}

const defaultProps = {
  currentTime: "",
  dashboardClock: "",
}

const DashboardFooter = ({ dashboardClock }) => {
  return (
    <Container>
      <div>{dashboardClock}</div>
    </Container>
  )
}

DashboardFooter.propTypes = propTypes
DashboardFooter.defaultProps = defaultProps

export default DashboardFooter
