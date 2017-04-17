import _ from "lodash"
import React, { PropTypes } from "react"
import Input from "zooid-input"
import Button from "zooid-button"

const propTypes = {
  uuid: PropTypes.string,
  token: PropTypes.string,
  onSetup: PropTypes.func,
}

const defaultProps = {
  uuid: "",
  token: "",
  onSetup: _.noop,
}

const SetupForm = ({ uuid, token, onSetup }) => {
  return (
    <form onSubmit={onSetup}>
      <Input
        name="uuid"
        label="UUID"
        placeholder="Room Device UUID"
        defaultValue={uuid}
      />

      <Input
        name="token"
        label="Token"
        placeholder="Room Device Token"
        defaultValue={token}
      />

      <Button>Setup</Button>
    </form>
  )
}

SetupForm.propTypes = propTypes
SetupForm.defaultProps = defaultProps

export default SetupForm
