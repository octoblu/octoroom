import styled from "emotion/react"
import PropTypes from "prop-types"
import React from "react"
import ErrorState from "zooid-error-state"
import Spinner from "zooid-spinner"

const Container = styled("div")`
  flex: 1;

  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  background: no-repeat center center fixed;
  background-color: rgba(0,0,0,0.75);
  transition: background-image 1000ms ease-in 500ms;

  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

  & > * {
    color: white;
  }
`

const propTypes = {
  error: PropTypes.object,
}

const RoomPage = ({ error }) => {
  if (error)
    return (
      <Container>
        <ErrorState title="Error" description={error.message} />
      </Container>
    )

  return (
    <Container>
      <Spinner size="large" />
    </Container>
  )
}

RoomPage.propTypes = propTypes

export default RoomPage
