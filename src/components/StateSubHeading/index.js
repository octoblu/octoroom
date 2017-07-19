import styled from "emotion/react"
import PropTypes from "prop-types"
import React from "react"

const Header = styled("div")`
  display: flex;
  font-size: 2.7vw;
  font-size: 2.7vmax;
  align-self: flex-start;
  text-align: left;
  color: #CACACA;
  line-height: 1.25;
  margin-bottom: 0.25em;
`

const propTypes = {
  children: PropTypes.node,
}

const StateSubHeading = ({ children }) => {
  if (!children) return null

  return <Header>{children}</Header>
}

StateSubHeading.propTypes = propTypes

export default StateSubHeading
