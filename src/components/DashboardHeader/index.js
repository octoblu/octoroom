import styled from "emotion/react"
import PropTypes from "prop-types"
import React from "react"

const Header = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
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
