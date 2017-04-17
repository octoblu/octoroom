import React from "react"
import LoadingSpinner from "zooid-spinner"
import styles from "./styles.css"

const DESCRIPTION =
  "We are experiencing a connection error. " +
  "The dashboard will automatically reconnect when " +
  "the connection re-establishes. The browser may " +
  "refresh while attempting to reconnect."

const propTypes = {}
const defaultProps = {}

const ConnectError = () => {
  return (
    <div>
      <h1 className={styles.header}>Connect Error</h1>
      <h2 className={styles.description}>{DESCRIPTION}</h2>
      <LoadingSpinner className={styles.spinner} size="large" />
    </div>
  )
}
ConnectError.propTypes = propTypes
ConnectError.defaultProps = defaultProps

export default ConnectError
