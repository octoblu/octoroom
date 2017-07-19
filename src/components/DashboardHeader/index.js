import styled from "emotion/react"
import PropTypes from "prop-types"
import React from "react"
import Flexbox from "react-flexbox"

const Header = styled(Flexbox)`
  width: 100%;
  justify-content: space-between !important;
  align-items: center !important;
  padding: 0.83vw 2.6vw;
  padding: 0.83vmax 2.6vmax;
  font-size: 1.65vw;
  font-size: 1.65vmax;
`

const propTypes = {
  name: PropTypes.string,
}

const DashboardHeader = ({ name }) => {
  return (
    <Header auto>
      <span>Citrix Smart Spaces</span>
      <div>{name}</div>
    </Header>
  )
}

DashboardHeader.propTypes = propTypes

export default DashboardHeader
