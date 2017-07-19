import styled from "emotion/react"
import PropTypes from "prop-types"
import React from "react"

const Container = styled("div")`
  color: #FFF;
  font-family: 'citrixsans-regular', sans-serif;
  font-size: 2.7vw;
  font-size: 2.7vmax;
  line-height: 1.25;
  margin-top: 0.25em;
  text-align: left;

  & > span {
    color: #7B7A7A;
    font-family: 'citrixsans-light', sans-serif;
    font-size: 2.7vmax;
    font-style: normal;
    line-height: 1.25;
  }

  & > div {
    color: #7B7A7A;
    font-family: 'citrixsans-light', sans-serif;
    font-size: 2vmax;
    font-style: normal;
    line-height: 1.25;
  }
`

const propTypes = {
  children: PropTypes.node,
}

const StateLink = ({ children }) => {
  if (!children) return null
  return <Container>{children}</Container>
}

StateLink.propTypes = propTypes

export default StateLink
