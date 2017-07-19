import styled from "emotion/react"
import React from "react"
import LoadingSpinner from "zooid-spinner"

const Header = styled("h1")`
  margin-bottom: 1.56vw;
  margin-bottom: 1.56vmax;
`

const Description = styled("h2")`
  width: 41.54vw;
  width: 41.54vmax;
  margin-top: 0;
  margin-bottom: 1.56vw;
  margin-bottom: 1.56vmax;
`

const DESCRIPTION =
  "We are experiencing a connection error. " +
  "The dashboard will automatically reconnect when " +
  "the connection re-establishes. The browser may " +
  "refresh while attempting to reconnect."

const ConnectError = () => {
  return (
    <div>
      <Header>Connect Error</Header>
      <Description>{DESCRIPTION}</Description>
      <LoadingSpinner size="large" />
    </div>
  )
}

export default ConnectError
