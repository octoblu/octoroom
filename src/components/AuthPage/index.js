import React, { PropTypes } from "react"
import ErrorState from "zooid-error-state"
import Spinner from "zooid-spinner"

import styles from "./styles.css"

const propTypes = {
  error: PropTypes.object,
}

const defaultProps = {}

const RoomPage = ({ error }) => {
  if (error)
    return (
      <div className={styles.root}>
        <ErrorState
          title="Error"
          description={error.message}
          className={styles.errorstate}
        />
      </div>
    )

  return (
    <div className={styles.root}>
      <Spinner size="large" className={styles.spinner} />
    </div>
  )
}

RoomPage.propTypes = propTypes
RoomPage.defaultProps = defaultProps

export default RoomPage
